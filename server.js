const express = require("express");
const { lineAuthVerifier } = require("./middleware/auth");
const requestHandler = require("./handlers/requestHandler");
const hbs = require("hbs");
const path = require("path");

require("dotenv").config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// configure templates for views and parials
const publicDirectory = path.join(__dirname, "./public");
const viewsDirectory = path.join(__dirname, "./public/templates/views");
const partialsDirectory = path.join(__dirname, "./public/templates/partials");

server.use(express.static(publicDirectory));

server.set('view engine', 'hbs');
server.set('views', viewsDirectory);
hbs.registerPartials(partialsDirectory);


server.get("/", (req, res) => {
  try {
    res.render('index');
  } catch (err) {
    console.log("Something went wrong inside root router", err);
  }
})


server.post("/lineapp", lineAuthVerifier, (req, res) => {
  try {
    requestHandler(req);
    res.status(200).send({ message: "Message processed!" });
  } catch (err) {
    console.log("Something went wrong inside lineapp router", err);
    res.status(404).send({ message: "Something went wrong!" });
  }
})

const port = process.env.PORT;

server.listen(port, () => {
  console.log("server is up and running on port:8080");
})