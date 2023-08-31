const video = require("./vlogmodel");
const express = require("express");
const cors = require("cors");
const Vlog = express();
Vlog.use(cors())
Vlog.use(express.json());
Vlog.get("/findVlog/:key", async (req, resp) => {
    let result = (await video.findOne({_id:req.params.key},{vlogvlogPoster:0}));
    if (result) {
      resp.send(result);
 
      console.log(result);
    } else {
      resp.send("not working");
    }
   
  });
module.exports = Vlog;
// Vlog.listen(5000);