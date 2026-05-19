require("dotenv").config()
const app = require("./src/app")




let PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server is runing on port 3000")
})