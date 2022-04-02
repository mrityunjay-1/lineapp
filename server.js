const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "working" });

  } catch (err) {
    console.log("Something went wrong inside root router", err);
  }
})

server.post("/lineapp", () => {
  try {
    console.log("Inside lineapp router:\n".repeat(50));



  } catch (err) {
    console.log("Something went wrong inside lineapp router", err);
  }
})

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("server is up and running on port:8080");
})