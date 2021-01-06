const mongoose=require("mongoose");
//this is for localhost mongoose compass
//create a youtubeRegistration name database in mongoose compass
//for connection express(front end) go to app.js
//mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{useNewUrlParser: true,
 //                                                                 useUnifiedTopology:true,
 //                                                                 useCreateIndex: true
//}).then(()=>{
// console.log("connection succesful");
//}).catch((err)=>{
//console.log(`error connection`);
 //})
 

 //now with mongoose atlus
 const URI="mongodb+srv://dbuser:dbuser@cluster0.jsn0q.mongodb.net/<dbname>?retryWrites=true&w=majority"
 mongoose.connect(URI,{useNewUrlParser: true,
                      useUnifiedTopology:true,
                      useCreateIndex: true
}).then(()=>{
 console.log("connection succesful");
}).catch((err)=>{
console.log(`error connection`);
 })

 //module.exports=connectDB;
