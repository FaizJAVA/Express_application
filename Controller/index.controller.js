const pool=require('../Model/db.js');
const User = require('../Model/user.js');
exports.HomePage=(request, response) => {
    response.render('Home.ejs');
}

exports.AboutPage=(request, response) => {
    response.render('About.ejs');
}

exports.LoginPage=(request, response) => {
    response.render('Login.ejs');
}

exports.RegisterPage=(request, response) => {
    response.render('Register.ejs');
}

exports.RegisterPost=(request, response) => {
    let name=request.body.name;
    let email=request.body.email;
    let password=request.body.password;

    const userobj=new User(name,email,password);
    userobj.save().then(result=>{
        
        response.send("<h1>Registration Success</h1>");
    }).catch(err=>{
        console.log(err);
        response.send("<h1>Registration Failed</h1>");
    });
}

exports.LoginPost=(request,response)=>{
    const userObj=new User();
    userObj.email=request.body.email;
    userObj.password=request.body.password;

    userObj.userCheck().then(result=>{
        if(result.length>0){
            console.log(result[0].name);  
            response.send("<h1>Welcome</h1>");
          } 
          else{
             response.send("<h1>Invalid email and password</h1>");
          }
    }).catch(err=>{
        console.log(err);
        response.send("Something Went Wrong");
    });

}