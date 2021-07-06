const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const SignUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: [2, "Minimum lenght : 2, Maximun lenght : 30"],
        maxlength: 30
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Password can not be 0')
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens:[{
        token: {
            type: String,
            required: true, 
        }
    }]
})

//generateAuthToken

SignUpTemplate.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY)
        console.log(token)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token
    }
    catch(err) {
        response.json(err)
    }
}

SignUpTemplate.pre('save', async function(next){
    if(this.isModified("password")) {
        console.log(`current password ${this.password}`)
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`current password ${this.password}`)
    }
    
    next(); 
})

module.exports = mongoose.model('myFirstDatabase', SignUpTemplate);

