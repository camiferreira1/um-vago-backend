// src/components/LoginForm.js
import React from 'react';
import './RegisterForm.css';
import { useState } from 'react';
import { post } from '../services/api';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Link } from 'react-router-dom';



const RegisterForm = () => {
    // Define state for 'username' and 'password' values
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    // Handle the event when the password input changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }


    // Handle the event when the login button is clicked
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const loginData = { password, email };
            const response = await post('register', loginData);
            console.log('Login successful:', response);
            navigate('/auth');
        } catch (error) {
            console.error('Login failed:', error);
            navigate('/auth');
        }
        setEmail('');
        setPassword('');
    };



    return (
        <div className="register-form">
            <h2>Registrarse</h2>
            <input type="email" placeholder="Correo de Institucion" />
            <input type="password" placeholder="Contraseña" value={password}
                onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Registrarse</button>
            <div className="links">
                <Link to="/">Inicio Sesion</Link>
            </div>
        </div>
    );
};

export default RegisterForm;
