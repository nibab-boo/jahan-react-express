const express = require("express");
const res = require("express/lib/response");

const PORT = process.env.PORT || 5001;

const app = express();

app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({message: "hello from server"});
});