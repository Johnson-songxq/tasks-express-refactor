// https://lazebear.github.io/jr-todos/
// require("dotenv").config(); //this is for generic use
const dotenv = require("dotenv");

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

// const logger = require("winston");
const logger = require("./utils/logger");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const cors = require("./middlewares/cors");
const morgan = require("morgan");
const router = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
// app.use(cors); //this is for our cors
app.use(cors()); //this is the package
app.use(express.json());

// app.use(morgan("dev"));
app.use(
  morgan(process.env.NODE_ENV === "production" ? "combined" : "dev", {
    stream: logger.stream, //output to logger(winston)
  })
);

app.use(router);

app.listen(PORT, (err) => {
  //   if (err) console.log(err);
  //   console.log(`server listening on port ${PORT}`);
  if (err) logger.error(err);
  logger.info(`server listening on port ${PORT}`);
});
