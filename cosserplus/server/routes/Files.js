const express = require("express")
const router = express.Router();
const Cfile = require('../models/File.model')
const validateToken = require("../middlewares/validateTokenHandler");
const path = require("path");
const fs = require("fs");
const auth = require("../middlewares/validateTokenHandler");
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// Configure cloudinary with your account credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Replace 'YOUR_CLOUD_NAME', 'YOUR_API_KEY', and 'YOUR_API_SECRET' with your Cloudinary credentials

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.get('/',auth,async (req,res)=>{
const files = await Cfile.find();
res.send(files)
});
router.get('/news', async (req,res)=>{
  const news = await Cfile.find({category: "news"});
  res.send(news)
  });
router.post('/add' ,upload.single("file"),async(req,res)=>{
 try{
  cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Upload failed' });
    }
    console.log(result);
    let file = new Cfile({
      name: req.body.name,
      category : req.body.category,
      description : req.body.desc,
      publicId : result.public_id 
    })
    
    file.save();
    // res.status(200).json({ public_id: result.public_id, url: result.url });
  }).end(req.file.buffer);
   
res.send("file uploaded!!")
}catch(err){
   res.json(err)
    console.log(err)
  }
});

router.get("/download/:id",async(req,res)=>{
  const { id } = req.params;
  console.log("id:",id)
  const item = await Cfile.findById(id);
  console.log(item)
  if (!item) {
    return next(new Error("No item found"));
  }
  console.log(item.publicId)
  // Generate the Cloudinary URL for the PDF file with authentication
  const cloudinaryURL = cloudinary.url(item.publicId, {
    resource_type: 'image', // Assuming PDF files are uploaded as raw
    secure: true, // Use HTTPS for secure access
  });

  // Redirect the client to the Cloudinary URL for PDF download
  res.redirect(cloudinaryURL);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the file record by ID to get the publicId
    const file = await Cfile.findById(id);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Delete the file from Cloudinary using its publicId
    const publicId = file.publicId;
    await cloudinary.uploader.destroy(publicId);

    // Delete the file record from MongoDB
    await Cfile.findByIdAndRemove(id);

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting the file" });
  }
});
module.exports = router
