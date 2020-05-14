const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const personsRouter = require("./persons/persons-router");
const programsRouter = require("./programs/programs-router");
const tagsRouter = require("./tags/tags-router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/persons", personsRouter);
server.use("/api/programs", programsRouter);
server.use("/api/tags", tagsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "We Up" });
});

module.exports = server;
