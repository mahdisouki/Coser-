const jwt = require ('jsonwebtoken')

const auth = (req , res , next) => {
try {
    const token = req.header("Authorization")
    if(!token) return res.status(400).json({msg : 'Invalid Authentification 1 '}) 
    console.log(token)
    jwt.verify(token , process.env.KEY , (error , user)=>{
        if(error)  return res.status(400).json({msg : 'Invalid Authentification 2'})

        req.user = user
        next()
    })
    
} catch (error) {
  return res.status(500).json({msg : error.message})  
}
}

module.exports = auth