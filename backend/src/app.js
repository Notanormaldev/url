const express = require("express");
const cors = require("cors");
const morgan=require('morgan')
const app = express();

const urlRoutes = require("./routes/url.routes");
const dataBase = require("./config/database");

app.use(express.json());
app.use(morgan('dev'))
app.use(cors({
    origin: "https://url-vyd3.onrender.com",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.use("/api/url", urlRoutes);

dataBase();

module.exports = app;
