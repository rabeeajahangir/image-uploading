import express from 'express';
const app = express()



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
  
  app.get('/api/images', (req, res) => {
      let file = images;
    res.send(200);
  });
  