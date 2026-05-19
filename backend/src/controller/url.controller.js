const {nanoid } = require("nanoid")

const Url = require("../model/url.model")

const createShortUrl = async (req, res) => {

    let { originalUrl } = req.body;

    if (!originalUrl.startsWith("http")) {
        originalUrl = "https://" + originalUrl;
    }

    const shortId = nanoid(6);

    await Url.create({
        shortId,
        originalUrl
    });

    return res.status(200).json({
        message: "Url Created Successfully",
        url: `${process.env.BASE_URL}/api/url/${shortId}`
    });
}


const redirectUrl= async(req,res)=>
{
       const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
        return res.status(404).json({
            message: "URL not found"
        });
    }
    
    url.clicks++;

    await url.save();

    res.redirect(url.originalUrl);
    
}


module.exports = {createShortUrl,redirectUrl}