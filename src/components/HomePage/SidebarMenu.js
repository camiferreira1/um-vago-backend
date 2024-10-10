import React from 'react';
import { FaBook, FaChalkboardTeacher, FaSearch } from 'react-icons/fa';
import './SidebarMenu.css'; // CSS específico para el menú

function SidebarMenu() {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-item">
                <FaBook className="sidebar-icon" />
                <span>Materias</span>
            </div>

            <div className="sidebar-item">
                <FaChalkboardTeacher className="sidebar-icon" />
                <span>Profesores</span>
            </div>

            <div className="sidebar-item">
                <FaSearch className="sidebar-icon" />
                <span>Suscripciones</span>
            </div>
        </div>
    );
}

export default SidebarMenu;
