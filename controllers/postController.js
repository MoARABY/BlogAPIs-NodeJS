const postModel=require("../models/postModel")
const userModel=require("../models/userModel")



// create post
const createPost=async (req, res) => {
    try {
        const newPost = await postModel.create(req.body)
        newPost?res.status(200).json(newPost):res.status(400).json({message:"post not created"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// delete post
const deletePost=async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if(post.username === req.body.username){
            const deletedPost = await postModel.findByIdAndDelete(req.params.id)
            deletedPost?res.status(200).json({message:"post deleted"}):res.status(400).json({message:"post not deleted"})
        } else {
            res.status(403).json({message:"you can delete only your post"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// update post
const updatePost=async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if(post.username === req.body.username){
            const updatedPost = await postModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            updatedPost?res.status(200).json(updatedPost):res.status(400).json({message:"post not updated"})
        } else {
            res.status(403).json({message:"you can update only your post"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get post
const getPost=async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        post?res.status(200).json(post):res.status(400).json({message:"post not found"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get all post
const getAllPosts=async (req, res) => {
    try {
        const username = req.query.user
        console.log(username)
        const category=req.query.category
        let posts;
        if(username) { posts= await postModel.find({username:username}) }
        // else if(category) { posts= await postModel.find({categories:{$in:[category]}}) }
        // else { posts= await postModel.find() }
        // posts.length>0? 
        res.status(200).json(posts)
        // :res.status(400).json({message:"no posts found"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports={createPost,deletePost,updatePost,getPost,getAllPosts}