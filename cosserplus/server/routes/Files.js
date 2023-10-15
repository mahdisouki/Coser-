const express = require("express")
const router = express.Router();
const Cfile = require('../models/File.model')
const upload = require("../routes/upload");
const validateToken = require("../middlewares/validateTokenHandler");
const path = require("path");
const fs = require("fs");
const auth = require("../middlewares/validateTokenHandler");


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
    let file = new Cfile({
    name: req.body.name,
    category : req.body.category,
    description : req.body.desc,
  })
  if(req.file){
    file.data = req.file.path
  }
  console.log(req.file)
  file.save();
res.send("file uploaded!!")
}catch(err){
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
  const file = item.data;
  console.log(file)
  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath); 
});
router.delete("/:id" ,async (req,res)=>{
  const {id} = req.params;
  console.log(id)
  const file = await Cfile.findById(id);
  const filePath = file.data;
  if (fs.existsSync(filePath)) {
    // The file exists, so you can proceed with deleting it
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err)
            return
        }

        console.log('File deleted successfully')
        Cfile.findOneAndDelete({"_id":id}).then((result)=>console.log(`Deleted ${JSON.stringify(result)}`))
        res.send("file deleted");
    })
} else {
    console.log('File not found')
}

  // find the user by its ID and delete it from DB
 
})
module.exports = router