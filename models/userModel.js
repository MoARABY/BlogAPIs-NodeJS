
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type : String,
            required: true,
            min: 8},
        profilePicture: {
            type: String,
            default: "",
            },
        coverPicture: {
            type: String,
            default: ""},
},{timeStamp:true})

module.exports= mongoose.model("User",userSchema)