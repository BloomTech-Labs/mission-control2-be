const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//connect server to express
const server = express();

//set all routers
// const orgRouter = require("./Organizations/orgs-router");

//server middleware
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

//set routers endpoints and connect to routers up top
// server.use("/api/organizations", orgRouter);

//these will test server is up and running with a get request
server.get("/testing", (req, res) => {
  res.status(200).json({ message: "Your server is up and running" });
});

//export server
module.exports = server;
