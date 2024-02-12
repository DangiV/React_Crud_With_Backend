import mongoose from "mongoose";


const ProductModel = mongoose.Schema({
    pName : {
        type : String,
        required : true
    },
    pPrice : {
        type : String,
        required : true
    },
 
})

const ProductSchema = mongoose.model("ProductDummyTested", ProductModel)

export default ProductSchema;