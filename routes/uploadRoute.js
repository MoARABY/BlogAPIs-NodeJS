const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename: (req, file, cb) => {
        // cb(null, req.body.name)
        cb(null, "hello.jpg")

    }
})
const upload = multer({ storage: storage });
router.post("/",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})
module.exports = router