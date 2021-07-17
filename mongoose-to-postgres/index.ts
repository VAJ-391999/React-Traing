import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect("mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/Test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
 }, () => console.log("Database Connected"))
