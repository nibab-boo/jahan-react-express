const {
  authenticate
} = require('@google-cloud/local-auth');
const path = require('path');
const google = require('@googleapis/forms');

const express = require("express");
const res = require("express/lib/response");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.use(cors());

app.get("/api",async (req, res) => {
  const response = await fetch('https://photos.app.goo.gl/ji7CqqSXMhHFrKML7/');
  const body = await response.text();

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const imageList = [];
  
  // using CSS selector  
  $('img.hKgQud').each((i, image) => {
    const imageNode = $(image).attr("src");
    const imageText = imageNode.replace(/=w\d+-h\d+-no/, '=w600-h600-no')
    console.log(imageNode);
    imageText
    
    imageList.push(imageText);
  });
  
  console.log(imageList);
  res.json({message: JSON.stringify(imageList)});
  
});
app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
});