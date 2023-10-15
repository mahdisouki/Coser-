const mongoose =require("mongoose");
const FileSchema =new mongoose.Schema({
    name : String,
    category: String,
    description : String,
    data: String
    }
);
module.exports= mongoose.model("Cfile",FileSchema);