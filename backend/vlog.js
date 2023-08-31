const express = require("express");

const multer = require("multer");
const vlogController = require("./vlogcontroller");
const routepost = express();
const bodyParser = require('body-parser')
routepost.use(bodyParser.json());
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

routepost.post(
  "/vlog", (req, resp) => {


    upload(req, resp, (err) => {
      console.log("abc");
      if (!err) {

        thumpsupply.generateThumbnail(req.file.path, {
          size: thumpsupply.ThumbSize.MEDIUM,
          timestamp: 1,
          forceCreate: true,
          cacheDir: './thumb',
          mimetype: "video/mp4"
        }).then((thumbnail) => {
          vlogController.Createpost(req, resp,thumbnail);
        })
      } else {
        console.log((err));
      }
    })
  });
console.log("hii")
module.exports = routepost;
