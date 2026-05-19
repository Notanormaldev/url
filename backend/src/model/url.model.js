const mongoose = require("mongoose")


const urlSchema = new mongoose.Schema({
    shortId: String,
    originalUrl: String,
    clicks: {
   type: Number,
   default: 0
}
});


 const Url = mongoose.model("Url", urlSchema);

 module.exports = Url