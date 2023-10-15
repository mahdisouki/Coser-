const express = require("express");
require('dotenv').config();
const app =  express();
const cookieParser = require("cookie-parser")
var bodyParser = require('body-parser')
const userRoutes = require('./routes/User')
const fileRoutes = require('./routes/Files');
const validateToken = require("./middlewares/validateTokenHandler");
var cors = require('cors')
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());  
app.use(cors({origin:['http://localhost:3000']}))
app.get('/test' , (req,res)=>{
   rs.json('test') 
})
require("./db/conn")
//middlewares
app.use("/user",userRoutes)
app.use("/file" , fileRoutes)
app.use("/uploads" , express.static('uploads'))





app.listen("5000" , ()=>{console.log("server is running")})
