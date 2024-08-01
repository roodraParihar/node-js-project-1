import mongoose from 'mongoose';
import validator from 'validator';

// schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },

    lastname:{
        type:String
    },

    email:{
        type:String,
        required:[true,"email is required"],
        unique: true,
        validate: validator.isEmail 
    },

    password:{
        type: String,
        required:[true,"password is required"],
        minlength:[6,"password length should be greater than 6"]

    },

    location:{
        type:String,
        default:"India"
    }

},{timestamps:true});

export default mongoose.model("User",userSchema);