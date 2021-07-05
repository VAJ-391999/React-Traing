const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

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
    }
})

/*SignUpTemplate.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})*/

module.exports = mongoose.model('myFirstDatabase', SignUpTemplate);

