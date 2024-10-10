import React, { useState } from 'react';
import './SubidaArchivos.css';

const file_icon = require('../../assets/images/file_icon.png');

const SubidaArchivos = () => {
    const [fileTitle, setFileTitle] = useState('');
    const [file, setFile] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = ['Parcial', 'Examen', 'Teórico', 'Ejercicio', 'Trabajo'];
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(50), (val, index) => currentYear - index);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(item => item !== category)
                : [...prevState, category]
        );
    };

    return (
        <div>
            <div className="file-upload-row">
                <div className="file-upload-field">
                    <label className="subida-label">Insertar Archivo</label>

                    {/* Ocultamos el input real y lo vinculamos a un botón */}
                    <input
                        type="file"
                        onChange={handleFileChange}
                        id="hidden-file-input"
                        className="hidden-file-input"
                    />
                    <button
                        type="button"
                        className="custom-upload-button"
                        onClick={() => document.getElementById('hidden-file-input').click()}
                    >
                        Seleccionar Archivo
                    </button>
                </div>

                <div className="file-label-field">
                    <div className="file-name-field">
                        {/* Muestra el nombre del archivo si está disponible */}
                        <div className='file-name-container'>
                            {file && <img src={file_icon} alt="Ícono de archivo" className='file-icon' />}                            {file ? <div className="name-file">{file.name}</div> : <div className="name-file"></div>}
                        </div>
                    </div>
                </div>

                <div className="file-title-field">
                    <label className="subida-label">Nuevo título de archivo</label>
                    <input
                        type="text"
                        value={fileTitle}
                        onChange={(e) => setFileTitle(e.target.value)}
                        className="subida-input"
                    />
                </div>
            </div>

            {/* Categorías */}
            <div className="subida-label-container">
                <label className="subida-label">Categorías</label>
                <div className="categorias-container">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={`subida-label-tag ${selectedCategories.includes(category) ? 'selected' : ''}`}
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            <div className="subida-label-container">
                <label className="subida-label">Año</label>
                <select className="subida-input-select">
                    {years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SubidaArchivos;


