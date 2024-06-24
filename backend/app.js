// const http=require('http'); //build in module http
// const server=http.createServer((req,res)=>{
//     console.log("server created");
//     res.end("working") 
    
//     });
//     server.listen(5000,"localhost",()=>{
//         console.log("server is running in 5000");
//     })

// const express=require('express');
// const app=express();
// const PORT=5000;
// const cors=require("cors")





// const data=require('./data.js')

// app.use(cors())
// app.get('/',(req,res)=>{
//     res.json(data)
// })


// app.get('/about',(req,res)=>{
//     res.json("about page")
// })

// app.listen(PORT,()=>{
//     console.log("server is running on "+PORT)
// })

// require('./models/model')
// app.use(require("./routes/auth"))  //app.use ke andar koi v middleware function use kr skte h


const express = require('express');
const app = express();
const port = 5000;

const mongoose=require("mongoose");
const mongoUrl=require("./keys");


const connectDB=()=>{
    mongoose.connect(mongoUrl).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log(err);
    });

}

app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port);
    
});



