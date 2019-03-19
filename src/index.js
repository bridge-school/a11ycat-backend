const express = require("express");
const morgan = require("morgan");
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./api");
const { logger } = require("./utils/logger");
const { errorHandler } = require("./middleware/error-handler");

// Create a new express application instance
const app = express();

// CORS
app.use(cors({ credentials: true, origin: true }));

// enable body parsing of POST request using body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The port the express app will listen on
const port = process.env.PORT || 8081;

logger.info("🤖 Initializing middleware");

app.use(morgan("tiny", { stream: logger.stream }));
app.use("/", router);
app.use(errorHandler);

// Serve the application at the given port
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    logger.info(`🎧 Listening at http://localhost:${port}/`);
  });
}

module.exports = {
  app
};
