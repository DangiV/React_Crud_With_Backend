import './App.css'
import NavBar from './Component/NavBar'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Register from './Component/Register';
import Login from './Component/Login';
import Product from './Component/Product';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
