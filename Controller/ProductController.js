const Product = require('../Models/Product');


const getAllProducts = async (req,res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getOneProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findOne({name:id}).exec();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const createProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        if(!product){
            return res.status(404).json({message:"Can not Add...."});
        }    
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const p = await Product.findByIdAndUpdate(id,req.body);
        if(!p){
            return res.status(400).json({message:"Product Not Found..."});
        }
        const np = await Product.findById(id);
        return res.status(200).json(np);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const deleteProduct = async (req,res)=>{
    const {id} = req.params;
    const p = await Product.findByIdAndDelete(id);
    if(!p) {
        return res.status(404).json({message:"Not Found...."});
    }
    return res.status(200).json(p);
}

module.exports = {
    getAllProducts,getOneProduct,createProduct,updateProduct,deleteProduct
}