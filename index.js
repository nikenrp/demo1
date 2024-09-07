/* const express = require("express");
const app = express(); */

/* let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount++;
  console.log("Total number of requests = " + requestCount);
  next();
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {}); */

const express = require("express");

const app = express();

function loggerMiddleWare(req, res, next) {
  console.log("Method is : " + req.method);
  console.log("Host is : " + req.hostname);
  console.log(new Date());
  next();
}

app.use(loggerMiddleWare);

app.get("/sum", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a - b,
  });
});

app.listen(3000);
