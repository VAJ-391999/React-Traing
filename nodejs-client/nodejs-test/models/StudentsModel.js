const mongoose = require("mongoose");
const validator = require("validator");

const opts = { toJSON: { virtuals: true } };

const studentSchema = new mongoose.Schema({
   name: {
        type : String,
        required : true,
        minlength: 3
    },
    email: {
        type: String,
        required : true,
        unique : [true, "Email is already present"],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type : Number,
        required: true,
        minlength: 10,
        
    },
    address : {
        type: String,
        required : true
    }
    
}, opts);


//Add new collection to mongoodb database
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;