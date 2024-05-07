//for server and database to connect
//import mongoose
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

//connect
mongoose.connect(connectionString).then(()=>{
    /* console.log(connectionString); */
    console.log('mongoose connected successfully');
}).catch((err)=>{
    console.log(err);
})