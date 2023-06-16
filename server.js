//--------WHEN THE SERVER RUNS THIS IS THE FIRST FILE THAT GETS EXECUTED-------------
//env configuration
require("dotenv").config()
const http = require("http")
const app = require("./app")
const { connectToDatabase } = require("./config/db")

//database connection
connectToDatabase()

const port = process.env.PORT || 8080

const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})