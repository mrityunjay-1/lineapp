const express = require("express");
const { lineAuthVerifier } = require("./middleware/auth");

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


server.post("/lineapp", lineAuthVerifier, (req, res) => {
  try {
    console.log("Inside lineapp router:\n".repeat(50), req.body);
    

    res.status(200).send({ message: "Message processed!" });
  } catch (err) {
    console.log("Something went wrong inside lineapp router", err);
    res.status(404).send({ message: "Something went wrong!" });
  }
})

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("server is up and running on port:8080");
})