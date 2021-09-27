const path = require("path");
const cors = require('cors')
const express = require("express");
const multer = require("multer");
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");


const app = express();

app.use(cors());






// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

// Route To Load Index.html page to browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/images', (req, res) => {
  res.json(res.files);
});
// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// You can create multiple middleware each with a different storage engine config so save different files in different locations on server
const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File upload success");
});

// Multiple Files Route Handler
app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("File Upload Success");
});

app.listen(5000);