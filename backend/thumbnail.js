const express = require("express");
const cors = require("cors");
const multer = require("multer");
const routepost1 = express();
const bodyParser = require('body-parser')
routepost1.use(bodyParser.json());
const thumpsupply = require('thumbsupply');

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./upload");
    },
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
}).single("vlog");

routepost1.post(
  "/vlogs",(req,resp)=>{
    const file=req.file;
    upload(req,resp,(err)=>{
if(!err){
    
    thumpsupply.generateThumbnail(req.file.path, {
      size: thumpsupply.ThumbSize.LARGE, 
      timestamp: 1,
      forceCreate: true,
      cacheDir: './thumb',
      mimetype: "video/mp4"
    }).then((thumbnail)=>{
      resp.download(__dirname +'/' +thumb);
    })
}
    })

})
console.log("hii")
module.exports = routepost1;
