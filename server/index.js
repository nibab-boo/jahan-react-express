const express = require("express");
const res = require("express/lib/response");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors')

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
const getReddit = async () => {
  // get html text from reddit
  const response = await fetch('https://reddit.com/');
  // using await to ensure that the promise resolves
  const body = await response.text();

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const titleList = [];
    
  // using CSS selector  
  $('._eYtD2XCVieq6emjKBH3m').each((i, title) => {
    const titleNode = $(title);
    const titleText = titleNode.text();
    
    titleList.push(titleText);
  });

  console.log(titleList);
  return titleList
  // res.json({message: JSON.stringify(title)});
};

app.get("/api",async (req, res) => {
  const response = await fetch('https://reddit.com/');
  const body = await response.text();

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const titleList = [];
  
  // using CSS selector  
  $('._eYtD2XCVieq6emjKBH3m').each((i, title) => {
    const titleNode = $(title);
    const titleText = titleNode.text();
    
    titleList.push(titleText);
  });
  
  console.log(titleList);
  res.json({message: JSON.stringify(titleList)});
  
});
app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
});