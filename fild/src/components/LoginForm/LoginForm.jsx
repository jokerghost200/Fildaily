import React, { useState } from 'react';
import './LoginForm.css'; // Assurez-vous que ce chemin est correct
import { FaUserAlt, FaLock  } from "react-icons/fa";
import { TiLockOpen } from "react-icons/ti";
import { Link } from 'react-router-dom';
import'./RegisterForm.css';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='login-form-container'>
        <div className='wrapper'>
            <form action="#">
                <h1>Login </h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUserAlt  className='icon' />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Password'
                        required
                    />
                    <span
                        className="icon"
                        onClick={() => setShowPassword((v) => !v)}
                        style={{ cursor: "pointer" }}
                        title={showPassword ? "Masquer" : "Afficher"}
                    >
                        {showPassword ? < TiLockOpen /> : <FaLock />}
                    </span>
                </div>
                <div className='remember-forgot'>
                    <label>
                        <input type="checkbox" /> Remember Me
                    </label>
                    <a href="./">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/RegisterForm" className="register-page">Register</Link></p>
                </div>

            </form>
        </div>
        </div>
    );
};

export default LoginForm;