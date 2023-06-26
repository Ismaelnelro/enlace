const express = require("express");
const bodyParser = require("body-parser");
const color = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const swagger_UI = require("swagger-ui-express");
const swagger_Js_Doc = require("swagger-jsdoc");
const swagger_config = require("./src/doc/swagger.config.json");
const dbConnection = require("../ong-service/src/database/database");
const fileUpload = require("express-fileupload");

// const session = require("express-session");
// const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;

require("dotenv").config();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));


// passport.use(new FacebookStrategy({
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/facebook/home"
// },
// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));


app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
const swagger_docs = swagger_Js_Doc(swagger_config);
app.use("/api/v1/docs", swagger_UI.serve, swagger_UI.setup(swagger_docs));
readdirSync("../ong-service/src/routes/").map((r) =>
  app.use("/api", require("../ong-service/src/routes/" + r))
);

const PORT = `${process.env.PORT}` || 5000;

app.listen(PORT, () => {
  console.log(
    color.cyan.underline.bold(`Server running on: http://localhost:${PORT}`)
  );
  console.log(
    color.cyan.underline.bold(
      `Documentation running on: http://localhost:${PORT}/api/v1/docs`
    )
  );
});

dbConnection();

module.exports = app;
