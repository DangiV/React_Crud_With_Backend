import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Product = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    pName: '',
    pPrice: ''
  });
  const [productDetails, setProductDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      const fetchDetails = await axios.get('http://localhost:3020/getAllProduct');
      setProductDetails(fetchDetails.data); 
      console.log("data", fetchDetails.data);
    } catch (error) {
      console.log(error);
    }
  }

  const editItem = (id) => {
    const selectedProduct = productDetails.find(item => item._id === id);
    setUserData(selectedProduct);
    handleOpen();
  }

  const deleteItem = async (id) => {
    console.log(id);
    try {
      const deleteApi = await axios.delete(`http://localhost:3020/Deleteproduct/${id}`);
      alert('item delete successfully');
      navigate('/Product');
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((oldVal) => ({
      ...oldVal,
      [name]: value
    }));
  }

  const handleSubmit = async (e, id) => {
    console.log('user id', id);
    e.preventDefault();
    try {
      const updateData = await axios.put(`http://localhost:3020/EditProduct/${id}`, userData); // Fix: include userData in the request body
      console.log('data updated successfully', updateData);
      handleClose();
      fetchData(); // Refresh data after update
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map((item) => (
            <tr key={item._id}>
              <th scope="row" >{item._id}</th>
              <td>{item.pName}</td>
              <td>{item.pPrice}</td>
              <td><button className='btn btn-warning' onClick={() => editItem(item._id)}>Edit</button></td>
              <td> <button className='btn btn-danger' onClick={() => deleteItem(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => handleSubmit(e, userData._id)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="pName"
                name='pName'
                value={userData.pName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="pPrice"
                name='pPrice'
                value={userData.pPrice}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default Product;
