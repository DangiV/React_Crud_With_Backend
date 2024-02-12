import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  })

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserData((oldVal) => ({
      ...oldVal,
      [name]: value
    }))
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const LoginRequest = await axios.post('http://localhost:3020/Register', userData)
      alert('register successfully')
      console.log("form submitted", userData);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            name='fName'
            value={userData.fName}
            onChange={HandleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lName"
            name='lName'
            value={userData.lName}
            onChange={HandleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            id="email"
            name='email'
            value={userData.email}
            onChange={HandleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            value={userData.password}
            onChange={HandleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Register
