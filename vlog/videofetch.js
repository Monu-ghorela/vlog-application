const video=require('./src/')
const express = require("express");
const cors = require("cors");
const IMage = express();
IMage.use(cors())
IMage.use(express.json())
IMage.get('/ImageFetch', async(req, resp) => {
    
        let image = await Image.find();
        if (image.length > 0) {
          resp.send(image);
        } else {
          resp.send("no user found");
        }
      

})

module.exports = IMage;