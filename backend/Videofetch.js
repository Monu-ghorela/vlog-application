const video = require("./vlogmodel");
const express = require("express");
const cors = require("cors");
const Video = express();
Video.use(cors())
Video.use(express.json())
Video.get('/VideoFetch', async (req, resp) => {

  let vlog = await video.find({},{ vlog:0});
  
  console.log(vlog);
  if (vlog.length > 0) {
    resp.send(vlog);


  } else {
    resp.send("no user found");
  }
})
module.exports = Video;




