import ProductSchema from "../Model/productMode.js";

// create product
export const AddPrdoct = async (req, res) => {
    const { pName, pPrice } = req.body

    try {
        const dataCreate = await ProductSchema.create({
            pName: pName,
            pPrice: pPrice
        })
        res.status(200).json(dataCreate)

    } catch (error) {
        console.log(error);
    }
}

// get all product

export const GetAllData = async (req, res) => {
    try {

        const allData = await ProductSchema.find()
        res.status(200).json(allData)
    } catch (error) {
        console.log(error);
    }
}

// edt details  product

export const EditProduct = async (req,res) =>{
    const {id} = req.params;

    try {
        const data = await ProductSchema.findByIdAndUpdate(id , req.body)
        res.status(200).json("data updated")
    } catch (error) {
        console.log(error);
    }
}

// delete product controller

export const DeleteProduct = async (req,res) =>{
    const {id} = req.params

    try {
        const deleteData = await ProductSchema.findByIdAndDelete(id)
        res.status(200).json('item deleted')
    } catch (error) {
     console.log(error);   
    }
}