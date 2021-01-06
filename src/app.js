const express=require("express");
const path=require("path");
const bcrypt=require("bcrypt");
const hbs=require("hbs");
const app=express();
//const connectDB=require('./db/conn');
const port=process.env.PORT || 3000;

// 7 let me knowthe express that is json file use
app.use(express.json());
//we want to get whatever user write inside form
app.use(express.urlencoded({extended:false}));
// 1 connection of databse through express
require("./db/conn");
//connectDB();
// 6 reqiure to models schema
const Register=require("./models/registers");

// 2 it is use for use the static file with expess like src->public->index.html
static_path=path.join( __dirname,"../public");
app.use(express.static(static_path));

//4 now we tell through express views change with templates
templates_path=path.join( __dirname,"../templates/views");
app.set("views",templates_path);

//5 now we tell through express that we use patial in our express aplication
partial_path=path.join( __dirname,"../templates/partials");
hbs.registerPartials(partial_path);

// 3 we have to know fron express that we use handlebars template engine 
app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
    res.render("register");
});

// 8 create new user in our db
app.post("/register",async(req,res)=>{
    try{
        //jo bhi input de rahewah pane ke liye lik rahe hai
       const password=req.body.password;
       const cpassword=req.body.confirmpassword;
       if(password===cpassword){
         const registerEmployee=new Register({
             firstname:req.body.firstname,
             lastname:req.body.lastname,
             email:req.body.email,
             gender:req.body.gender,
             phone:req.body.phone,
             age:req.body.age,
             password:req.body.password,
             confirmpassword:req.body.confirmpassword
         })

         // 10 middleware encryption of password do here go in where we define schema below

         const registerd=await registerEmployee.save();
         res.status(201).render("index");
       }
       else{
           res.send("password not matched");
       }
    }
    catch(err){
        res.status(400).send(err);
    }
   
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
// 9 check email and pass for login page
app.post("/login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const useremail=await Register.findOne({email:email});
        const isMatch=await bcrypt.compare(password,useremail.password);
        if(isMatch){
            res.status(201).render("newton");
        }
        else{
            res.send("Invalid email and password");
        }
    }

    catch(err){
        res.status(400).send("invalid login");
    }
})
app.listen(port,()=>{
    console.log(`this is port number  ${port}`);
})
