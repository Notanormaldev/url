const express = require("express")

const router = express.Router();
const {createShortUrl,redirectUrl} =  require("../controller/url.controller")
// to create Shorteerr Url 
router.post("/Shoorten",createShortUrl)
router.get("/:shortId",redirectUrl)

module.exports = router