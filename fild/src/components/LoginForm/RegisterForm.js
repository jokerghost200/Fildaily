import React, { useState } from 'react';
import './RegisterForm.css'; // Assurez-vous que ce chemin est correct
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { TiLockOpen } from "react-icons/ti";


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        
        <div className='register-form-container'>
            <div className='register-form-wrapper'>
                <form action="#">
                    <h1>Register</h1>
                    <div className="register-input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUserAlt className='register-icon' />
                    </div>
                    <div className="register-input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='register-icon' />
                    </div>
                    <div className="register-input-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            required
                        />
                        <span
                            className="register-icon"
                            onClick={() => setShowPassword((v) => !v)}
                            style={{ cursor: "pointer" }}
                            title={showPassword ? "Masquer" : "Afficher"}
                        >
                            {showPassword ? <TiLockOpen /> : <FaLock />}
                        </span>
                    </div>
                    <div className="register-input-box">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder='Confirm Password'
                            required
                        />
                        <span
                            className="register-icon"
                            onClick={() => setShowConfirmPassword((v) => !v)}
                            style={{ cursor: "pointer" }}
                            title={showConfirmPassword ? "Masquer" : "Afficher"}
                        >
                            {showConfirmPassword ? <TiLockOpen /> : <FaLock />}
                        </span>
                    </div>
                    <button type="submit" className='register-button'>Register</button>
                    <div className="register-login-link">
                        <p>Already have an account? <a href="./LoginPage">Login</a></p>
                    </div>
                </form>
            </div>
                 <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" className='register-img'/>
            
        </div>
    );
};

export default RegisterForm;