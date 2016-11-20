const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('./'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(3000, (err) => {
  console.log(err || "Server started");
});
