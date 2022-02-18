const express=require('express');
const routerAp=require('./Routes/index.route.js');
const path=require('path');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine","ejs");

app.use(routerAp);

const FilePath = path.join(__dirname,"Public");
app.use(express.static(FilePath));

app.listen(3000,()=>{
    console.log("Server Running");
});