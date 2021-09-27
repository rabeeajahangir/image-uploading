const express = require('express');
 const multer = require("multer");
const app = express();

const fileStorageEngine = multer.diskStorage ({
  destination: (req, file, cb) =>{
    cb(null, './images');
  },
  finename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Single File upload success');
});

const upload = multer({storage: fileStorageEngine});


app.listen(5000);

