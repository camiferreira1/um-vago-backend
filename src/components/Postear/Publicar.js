import React from 'react';
import './Publicar.css';
import './SubidaArchivos.css';
import SubidaArchivos from './SubidaArchivos';
import Post from '../Post/Post';



const Publicar = () => {

    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="publicar-container">

            <h2 className="publicar-header">Publicar en: TEORÍA DE CIRCUITOS</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="publicar-label">Título</label>
                    <input type="text" className="input-field" required />
                </div>

                <div className="form-row">
                    <label className="publicar-label">Descripción</label>
                    <textarea className="textarea-field" required />
                </div>

                <hr className="separator-line" />


                <SubidaArchivos />

                <button type="submit" className="publicar-button">Publicar</button>
            </form>
        </div>
    );
};

export default Publicar;
