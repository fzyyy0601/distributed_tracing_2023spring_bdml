const express = require("express");
const axios = require("axios");

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

// axios.get('http://localhost:8078')
// .then(res=>{
//   const {data} = res.data
//   console.log(data);
// })
// .catch(err=>{
//   console.log('Error: ', err.message);
// })

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});