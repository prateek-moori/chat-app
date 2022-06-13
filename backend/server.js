import express from "express"
import { chats } from "./data/data.js";
import dotenv from "dotenv"

const app= express();
dotenv.config();

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is starting at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("API is running");
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
    console.log("Hi");
})

app.get("/api/chat/:id",(req,res)=>{
    const id= req.params.id;
    const singleChat= chats.filter((e)=> e._id===id)
    res.send(singleChat);
})

