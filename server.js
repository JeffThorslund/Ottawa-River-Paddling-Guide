/*--Custom Modules--*/
const readRiverDataFiles = require("./modules/readRiverDataFiles");
const getMapList = require("./modules/getMapList");
const sendMail = require("./modules/sendMail");
const handleSubmit = require("./modules/handleSubmit");
const handleClickAddRapid = require("./modules/handleClickAddRapid");
const handleClickAddFeature = require("./modules/handleClickAddFeature");
const handleClickAddRiver = require("./modules/handleClickAddRiver");
const handleDelete = require("./modules/handleClickDelete");

/*--Modules==*/
const compression = require("compression");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

/*--Server--*/
const app = express();
const http = require("http").createServer(app);

/*--Middleware--*/
require("dotenv").config();
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));

/*--Socket--*/
var io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("a user connected");
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.post("/api/data", (req, res, next) => {
  let data = readRiverDataFiles(req.body.path);
  res.send(data);
});

app.post("/api/mailer", (req, res, next) => {
  const { img, desc, email, river, rapid } = req.body;
  sendMail(img, desc, email, river, rapid);
  res.send("Submitted!");
});

app.post("/api/getMapList", (req, res, next) => {
  console.log(req.body.path);
  let data = getMapList(req.body.path);
  res.send(JSON.stringify(data));
});

app.post("/api/handleSubmit", (req, res, next) => {
  let riverName = req.body.rivers[req.body.riverIndex].name;
  handleSubmit(riverName, req.body.river);
  res.send("Submission Received!");
  io.emit("update");
});

app.post("/api/handleDelete", (req, res, next) => {
  const {
    rivers,
    riverIndex,
    rapidIndex,
    featureType,
    featureIndex,
  } = req.body;

  let river = handleDelete(
    rivers,
    riverIndex,
    rapidIndex,
    featureType,
    featureIndex
  );

  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);

  res.send("delete submission received");
});

app.post("/api/handleClickAddRiver", (req, res, next) => {
  handleClickAddRiver(req.body.riverName);
  res.send("River Added!");
});

app.post("/api/handleClickAddRapid", (req, res, next) => {
  const { rivers, riverIndex } = req.body;
  let river = handleClickAddRapid(rivers, riverIndex);
  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);
  res.send("Rapid Added!");
});

app.post("/api/handleClickAddFeature", (req, res, next) => {
  const { rivers, riverIndex, rapidIndex, newFeatureType } = req.body;
  let river = handleClickAddFeature(
    rivers,
    riverIndex,
    rapidIndex,
    newFeatureType
  );
  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);
  res.send("Feature Added!");
});

const port = process.env.PORT || 5000;
http.listen(port);

console.log(`Server is started baby!`);
