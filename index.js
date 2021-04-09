const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded());

app.use(cookieParser());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
