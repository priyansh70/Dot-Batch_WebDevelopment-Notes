const File = require("../models/File");

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log("File", file);

        const extention = `.${file.name.split('.')[1]}`;
        let path = __dirname + "/files/" + Date.now() + extention;
        console.log("Path : ",path)

        file.mv(path, (err) => {
            console.log(err)
        });

        res.json({
            success : true,
            message : "Local File Uploaded Successfully",
            file : file
        })
    }
    catch (err) {
        res.status(500).json({
            success : false,
            message : "File Uploaded Failed",
        })
    }
}