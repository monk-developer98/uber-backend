const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const useSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3 , "First name must be at least 3 characters long"]
        },
        lastname:{
            type: String,
            minlength:[3 , "last name must be at least 3 characters long"]
        }
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    socketId:{
        type:String
    }
})

useSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token
}

useSchema.methods.comparePassword = async function(password) {
    return  await bcrypt.compare(password, this.password)
}
useSchema.statics.hashPassword = async function(password) {
    return  await bcrypt.hash(password, 10)
}