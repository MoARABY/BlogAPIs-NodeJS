const express=require('express');
const router=express.Router()
const {showUser,updateUser,deleteUser}=require("../controllers/userController")


router.route("/:id").get(showUser).put(updateUser).delete(deleteUser)


module.exports=router