const express = require('express')
const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads/') //directory where files will be saved
    },
    filename : function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null , Date.now()+ext)
    }
       
})

var upload = multer({
    storage : storage,
    fileFilter:function(req,file,cb){
        if(
            file.mimetype == "image/png"||
            file.mimtype == 'image/jpg' ||
            file.mimtype == 'image/jpeg' ||
            file.mimetype == 'image/webp'||
            file.mimetype == 'application/pdf'
        ){
            cb(null , true)
        }else{
            console.log('type not supported')
            cb(null , false)
        }
    }
})

module.exports = upload