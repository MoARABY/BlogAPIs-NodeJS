const express=require('express');
const router=express.Router()
const {createPost,deletePost,updatePost,getPost,getAllPosts}=require("../controllers/postController")


router.route("/").get(getAllPosts).post(createPost)
router.route("/:id").get(getPost).put(updatePost).delete(deletePost)

module.exports=router