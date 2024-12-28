import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/BoilerPlate",{
    useNewUrlParser: true,
    usrUnifiedTopology : true
},                                                         
    () => {                                   //Callback function
        consolelog("DB connected")
    }
)

//Routes

app.get("/", (req,res) =>{ 
    res.send("My Api")
})

app.listen(9002, ()=> {
    console.log("Be started at 9002")
})