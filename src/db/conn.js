const mongoose=require("mongoose");
//create a youtubeRegistration name database in mongoose
//for connection express(front end) go to app.js
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{useNewUrlParser: true,
                                                                  useUnifiedTopology:true,
                                                                  useCreateIndex: true
}).then(()=>{
 console.log("connection succesful");
}).catch((err)=>{
console.log(`error connection`);
 })
