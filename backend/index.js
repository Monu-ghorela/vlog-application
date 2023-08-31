console.log((Date.now()));
const User = require('./db/Users')
const express = require('express')
const cors = require('cors');
const routepost = require('./vlog');
const FindVlog=require('./FindVlog')
const path=require('path')
// const routepost = require('./VlogUpload')
const app = express();
app.use(express.static(path.join(__dirname+'/public')))
app.use('/',routepost);
// app.use('/',routepost1);
const video=require('./Videofetch')
app.use('/',video);
app.use('/',FindVlog)
app.use(cors())
// app.use("/", routepost)
app.use(express.json());
app.post('/Signup', async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  console.log(result)
  resp.send(result)
})
app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    { 
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        await resp.send(user);
        console.log("found");
      } else {
        console.log("not found");
        await resp.send("result not found");
      }
    }
  } else {
    resp.send("result not found");
  }
});
app.listen(5000);