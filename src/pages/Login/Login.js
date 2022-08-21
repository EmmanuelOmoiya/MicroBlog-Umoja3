import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <p className="emailoglab">Email Address</p>
                <input type="email" className="email" placeholder='Email Address' required/>
                <p className="passloginp">Password</p>
                <input type="password" className="password" required placeholder="Password"/>
                <button className="loginbtn">Login</button>
                <p className="altbt">Don't have an account? <Link to="/signup" className="wolt">Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;