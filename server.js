const path = require("path");

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

// This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
app.use(cors());

// Storage Engine That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

// Route To Load Index.html page to browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload success");
});

// Multiple Files Route Handler
app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Multiple Files Upload Success");
});

app.listen(5000);