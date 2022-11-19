const express=require("express")
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors")
const app=express()
dotenv.config()
const pinRout=require("./routes/pins")
const userRout=require("./routes/users");
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://mappin:GRfTTTnBOaa0PTbH@cluster0.11uxcuh.mongodb.net/mappin?retryWrites=true&w=majority",{ useNewUrlParser: true }, function (err) { 
	if (err) throw err; console.log('Successfully connected')})

	app.use("/api/users/register",userRout)
	app.use("/api/users",userRout)
	app.use("/api/pins",pinRout)

	
app.listen(8080,()=>{
	console.log("Back end server is running at 8080")
})