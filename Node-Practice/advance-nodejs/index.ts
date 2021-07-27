import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import http from 'http';
import bcrypt from 'bcrypt';

dotenv.config();


mongoose.connect("mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/Test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
 }, () => console.log("Database Connected"))

const server = http.createServer((req, res) => {
    bcrypt.hash('hi this is the code', 2)
    .then((hash) => {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(hash);
        res.end()
    })
});

server.listen(5000);


