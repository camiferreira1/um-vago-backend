import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { post } from '../services/api'; // Importa la función de servicio


const LoginForm = () => {
    // Define state for 'username' and 'password' values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle the event when the username input changes
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Handle the event when the password input changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Handle the event when the login button is clicked
    const handleLogin = async (e) => {
        e.preventDefault();
        // try {
        const loginData = { username, password };
        const response = await post('login', loginData); // Usando el servicio POST
        console.log('Login successful:', response);
        // } catch (error) {
        //     console.error('Login failed:', error);
        // }

        // Clear the form
        setUsername('');
        setPassword('');

    };


    return (
        <div className="login-form">
            <h2>Inicio Sesion</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Iniciar Sesion</button>
            <div className="links">
                <a href="#">Forgot Password</a>
                <Link to="/register">Registrarse aquí</Link> {/* Navega a la página de registro */}
            </div>
        </div>
    );
};

export default LoginForm;
