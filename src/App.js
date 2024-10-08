// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import './App.css';
// import HomePage from './pages/HomePage';  // Ejemplo de otra página

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />         {/* Ruta principal */}
          <Route path="/register" element={<RegisterPage />} /> {/* Registro */}
          <Route path="/auth" element={<AuthPage />} /> {/* Registro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

