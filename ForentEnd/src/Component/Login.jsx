import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nevigate = useNavigate()
    const [userData, setUserData] = useState({
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
            const loginRequest = await axios.post('http://localhost:3020/LoginUser', userData)
            alert('login successfully');
            nevigate('/Product')
            console.log('loginRequest', loginRequest);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={HandleSubmit}>

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

export default Login
