//1. import dotenv module
//Loads .env file contents into process.env by default.
require ('dotenv').config()

//2. import express
const express = require ('express')

//3. import cors
const cors = require('cors')


//import router
const router = require('./Routing/router')
//import middleware
/* const appmiddleware = require('./middleware/appMiddleware') */

//import connection file
require('./Database/connection')

//4. create server
const pfServer = express()

//5. use cors by server using .use method
pfServer.use(cors())

//6. convert  json to javascript objects
//json method returns a middleware that can convert json format to javascript object
//middleware - req-res cycle control
pfServer.use(express.json())   

/* pfServer.use(appmiddleware) */

//server using router    router should be after converting the data to json, so that server understands its and object
pfServer.use(router)

//import application middle
require('./middleware/appMiddleware')

// to fetch photo- 
//first argument - name by which other application can use this folder
//second argument - express.static - to export that folder
pfServer.use('/uploads', express.static('./uploads'))


//7. set port
const PORT = 3003||process.env

//8. run server
pfServer.listen(PORT,()=>{
    console.log(`project fair server running successfully at port number ${PORT}`);
})


/* //GET request
pfServer.get('/', (req,res)=>{
res.send(`<h1 style = "color:blue">server running successfully and ready to resolve get request</h1>`)
}) */

/* //POST request
pfServer.post('/',(req,res)=>{
res.send('post request')
}) */

/* //PUT request
pfServer.put('/',(req,res)=>{
    res.send('put request')
    }) */

