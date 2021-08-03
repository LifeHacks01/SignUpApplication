const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routesUrls=require('./router/router')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true },()=> console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

app.listen(3000,()=> console.log("Server is running"))