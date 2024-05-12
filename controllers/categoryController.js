const categoryModel=require("../models/categoryModel")

const createCategory=async (req, res) => {
    try {
        const {name}=req.body
        const newCategory= await categoryModel.create({name})
        newCategory ? res.status(201).json(newCategory) : res.status(400).json({message:"Category not created"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getCategory=async (req, res) => {
    try {
        const findCategory=await categoryModel.find()
        findCategory ? res.status(200).json(findCategory) : res.status(404).json({message:"Category not found"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {createCategory,getCategory}