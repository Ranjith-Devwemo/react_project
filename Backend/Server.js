const express= require("express");
const mysql=require("mysql")
const server=express();
const cors=require("cors");
server.use(cors());
server.use(express.json());
// mysql connection

const dp=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login"
})

server.get(('/create'),(req,res)=>{
    const sql="select *from login";
    dp.query(sql,(err,data)=>{
        if(err) return req.json(err);
        return res.json(data)

    })
})

server.post('/',(req,res)=>{
const sql="insert into login (name,email,password) values(?)";
const value=[
    req.body.name,
    req.body.email,
   req.body.password,
]
dp.query(sql,[value],(err,data)=>{
    if(err) return res.json(err)
   return res.json(data);
})  
})
server.listen(2024,function good(error){
    if(error){
        console.log("error");
    }
    else{
        console.log("listennig successfully");
    }
})