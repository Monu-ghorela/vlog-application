   
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Vlog");
const postschema = new mongoose.Schema(
  {
    title: String,
    description: String,
    vlog: {
      data: Buffer,
      ContentType: String,
    },
    vlogPoster: {
        data: Buffer,
      ContentType: String,
    }

  });
module.exports = mongoose.model("vlog", postschema);
