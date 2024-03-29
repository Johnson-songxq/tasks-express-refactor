const express = require("express");
const app = express();
function m1(req, res, next) {
  console.log("m1");
  // next();
}
function m2(req, res, next) {
  console.log("m2");
  next();
}
function m3(req, res, next) {
  console.log("m3");
  next();
}
function m4(req, res, next) {
  console.log("m4");
  next();
}

app.use(m1);
app.use("/v1", m2);
app.get("/v1/tasks", m3, m4);
// app.get('/v1/tasks', m4);
app.get("/v1/tasks/:id", (req, res) => {
  res.json(req.params);
});

app.listen(3000, () => console.log("listen on 3000"));
// quiz (what's get logged in the terminal and what's the response?)
// GET /v1/tasks/1
// GET /v1/tasks

// all
