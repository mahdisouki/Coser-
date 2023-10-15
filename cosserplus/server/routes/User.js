const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const CryptoJS = require("crypto-js");
// const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const auth = require("../middlewares/validateTokenHandler")
const generateAccessToken = (user) => {
  return jwt.sign({id: user._id }, process.env.KEY, {expiresIn: "7d"});};

const generateRefreshToken = (user) => {
  return jwt.sign( {id: user._id }, process.env.KEY , {expiresIn:"7d"});
};
router.get("/users" ,auth ,async(req,res)=>{
  const users = await User.findOne({email :"coserplus@gmail.com"})
  let decryptedPassword =CryptoJS.AES.decrypt(users.password,
    process.env.KEY
  ).toString(CryptoJS.enc.Utf8)
  res.send(decryptedPassword);
})
router.post('/register' ,async (req,res)=>{
  // const passwordHash = await bcrypt.hash(req.body.password , 10)
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });
    
      try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err.message);
      }
    
});
router.post("/login",async (req,res)=>{
 try{ const {email , password} = req.body;

  const user = await User.findOne({email})
  if(!user) return res.status(400).json({msg :'user does not exist.'})
  const isMatch = await bcrypt.compare(password , user.password)
  if(!isMatch) return  res.status(400).json({msg :'Incorrect password'})
  const accesstoken = generateAccessToken({id : user._id})
  const refreshtoken = generateRefreshToken({id : user._id})
  res.cookie('refreshtoken' ,  refreshtoken, {
     httpOnly : true , 
     path :'/user/refresh_token',
     maxAge: 7*24*60*60*1000
  })
  res.json({accesstoken})}
  catch(error){
    return res.status(500).json({msg : error.message})
  }

});
router.get("/refresh_token",(req,res)=>{
  try {
    const rf_token = req.cookies.refreshtoken;
    console.log(rf_token)
    console.log(process.env.KEY)
    if(!rf_token) return res.status(200).json({msg : 'Please Login or Regis'})
     
    jwt.verify(rf_token , process.env.KEY ,(error , user) => {
           
        if(error) return res.status(400).json({msg : error.message})
      
        const accessToken = generateRefreshToken(user)
     
        res.json({accessToken})
        
    })


   // res.json({rf_token})
    
} catch (error) {
    return res.status(500).json({msg : error.message}) 
}
  
 });
 router.get("/logout" , (req,res)=>{
  try {
    res.clearCookie('refreshtoken' , {  path :'/user/refresh_token'})
    return res.json({msg :'Logged out'})
    
} catch (error) {
return res.status(500).json({msg : error.message})  
}
 })
module.exports = router;