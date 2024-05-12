const userModel=require("../models/userModel")
const userPost = require("../models/postModel");
const bcrypt=require("bcrypt")


// get user
const showUser =async (req,res)=>{
    try {
        const user=await userModel.findById(req.params.id)
        user ? res.status(200).json({id:user.id,username:user.username,email:user.email}):res.status(404).json({message:"user not found"})   
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// update user
const updateUser =async (req,res)=>{
    try {
        if (req.body.userId === req.params.id) {
            const user=await userModel.findById(req.params.id)
            if(!user) {return res.status(404).json({message:"user not found"})}
            if(req.body.password) {
                const salt=await bcrypt.genSalt(12)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }
            const newUser=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            newUser ? res.status(200).json({id:newUser.id,username:newUser.username,email:newUser.email}):res.status(404).json({message:"something went wrong"})
        } else {
            return res.status(401).json({message:"you can update only your account"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// delete user
const deleteUser =async (req,res)=>{
    // res.send("user")
    try {
        if(req.body.userId === req.params.id) {
            const user=await userModel.findById(req.params.id)
            if(!user) {return res.status(404).json({message:"user not found"})}
            const deletedPosts=await userPost.deleteMany({username:user.username})
            const deletedUser=await userModel.findByIdAndDelete(req.params.id)
            deletedUser ? res.status(200).json({message:"user deleted successfully"}):res.status(404).json({message:"something went wrong"})
        } else {
            return res.status(401).json({message:"you can delete only your account"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={showUser,updateUser,deleteUser}