import express, { Router } from 'express'
import { Registeruser, userLogin } from '../Controller/UserController.js';
import { GetAllData, AddPrdoct, DeleteProduct, EditProduct } from '../Controller/ProductController.js';

const route  = express(Router());

route.post('/Register', Registeruser)
route.post('/LoginUser',userLogin)

route.post('/AddProduct',AddPrdoct)
route.get('/getAllProduct',GetAllData)
route.put('/EditProduct/:id',EditProduct)
route.delete('/Deleteproduct/:id',DeleteProduct)

export default route;