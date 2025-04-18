require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const productRouter=require("./routers/productRouter")

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mongodb is successfully connected")
}).catch((error)=>{
    console.log(error)
})

const app=express()

const PORT=process.env.PORT || 3000

const allowedOrigins = [
    "http://localhost:5173",
    "https://backend-frontend-coral.vercel.app"
  ];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
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

console.log(process.env.PORT)