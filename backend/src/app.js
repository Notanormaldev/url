const express = require("express");
const cors = require("cors");

const app = express();

const urlRoutes = require("./routes/url.routes");
const dataBase = require("./config/database");

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.use("/api/url", urlRoutes);

dataBase();

module.exports = app;
