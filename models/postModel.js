
const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    title:{
        type:String,
        max:200
    },
    desc:{
        type:String,
        max:500
    },
    photo:{
        type:String,
        default:""
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        default:[]
    }
},{timeStamp:true})

module.exports=mongoose.model("Post",postSchema)