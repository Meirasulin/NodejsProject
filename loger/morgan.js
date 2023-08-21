const morgan = require("morgan");
const logFormt = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
};
const morganMiddleware = morgan(logFormt);

module.exports = morganMiddleware;
