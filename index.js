const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
const expressLayouts = require("express-ejs-layouts");
const sassMiddleware = require("node-sass-middleware");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded());

app.use(cookieParser());
app.use(
  sassMiddleware({
    src: "./assets/scss", //from where to pick up css file for compilation
    dest: "./assets/css",
    debug: false, //when in production put false
    outputStyle: "extended",
    prefix: "/css", //where should look into for css
  })
);
app.use(express.static("./assets"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
