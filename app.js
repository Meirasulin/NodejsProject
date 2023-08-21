const express = require("express");
const app = express();
const router = require("./routers/router");
const { error } = require("console");
const morganMiddleware = require("./loger/morgan");

/******** ********/
app.use(express.json());
app.use(express.text());

/******** ********/
app.use("/api", router);

/******** ********/
app.use(morganMiddleware);
/******** ********/
app.use((req, res, next) => {
  throw new Error("Server error. please come back later");
});
app.use((err, req, res, next) => {
  res.status(500).send(error.message);
});

const PORT = 8080;
app.listen(PORT, (error) => {
  // התניה אם יש שגיאה שיעצור ויציר הודעה מתאימה
  console.log(`server runing on - ${PORT} PORT`);
});
