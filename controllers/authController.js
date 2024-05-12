const userModel=require("../models/userModel")
const bcrypt=require("bcrypt")

const userRegister = async(req,res)=>{
    try {
        const {username,email,password}=req.body
        if(!username || !email || !password) { return res.status(400).json({msg:"All fields are required"})}
        if(password.length<6) {return res.status(400).json({msg:"Password must be at least 6 characters"})}
        if(!email.includes("@") || !email.includes(".")) {return res.status(400).json({msg:"Invalid email"})}
    
        const findUser= await userModel.findOne({email:email})
        if(findUser) {return res.status(400).json({msg:"User already exists"})}
        const salt=await bcrypt.genSalt(12)
        const hashedPasword=await bcrypt.hash(password,salt)
        const newUser= await userModel.create({
            username,
            email,
            password:hashedPasword
        })
        !newUser ? res.status(400).json({msg:"Something went wrong"}) : res.status(200).json(newUser) 
    } catch (error) {
        res.status(500).json(error)
    }
}
const userLogin= async (req,res)=>{
    try {
        const {username,password}=req.body
        const findUser= await userModel.findOne({ username: username });
        if(!findUser) {return res.status(400).json({msg:"check username or password"})}
        const comparePassword=await bcrypt.compare(password,findUser.password)
        !comparePassword ? res.status(400).json({msg:"check username or password"}): res.status(200).send("login successfull")
        // const { password, ...others } = user._doc;
        // res.status(200).json(others);
        // في الحاله دي بيقصل الباسورد عن البيانات و بيعت البيانات بس
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports={userRegister,userLogin}