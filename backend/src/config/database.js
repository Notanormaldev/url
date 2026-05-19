const mongoose = require("mongoose")

function connectTodb()
{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected To db")
    }).catch(err=>{
            console.log("ERROR OCCUR AT DB CONNECTION",err)
    })
}

module.exports = connectTodb