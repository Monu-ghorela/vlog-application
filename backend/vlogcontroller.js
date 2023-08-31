const POST = require("./vlogmodel");
const fs = require('fs');
const Createpost = async (req, resp,thumbnail) => {
    try {
        const post = new POST({

            title: req.body.title,
            description: req.body.description,
            vlog: {
                data: fs.readFileSync('upload/' + req.file.filename),
                contentType: "video/mp4",

            },
           
            vlogPoster: {
                data: fs.readFileSync(thumbnail),
                contentType: "image/png ",

            }
        });
        const POSt = await post.save();
        console.log(POSt)
        resp.send(POSt);
    }
    catch (error) {
        // resp.send(error);
        console.log(error);
    }

};
module.exports = { Createpost };
