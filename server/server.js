const express=require("express")
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const productRouter=require("./routers/productRouter")

mongoose.connect("mongodb+srv://devNishant:9szLm8NSLj-YruT@test.lm4bs.mongodb.net/testing?retryWrites=true&w=majority&appName=test").then(()=>{
    console.log("mongodb is successfully connected")
}).catch((error)=>{
    console.log(error)
})

const app=express()

const PORT=process.env.PORT || 3000

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:[
        "content-type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ]
}))

app.use(cookieParser())
app.use(express.json())

app.use("/api/prodcut",productRouter)

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))