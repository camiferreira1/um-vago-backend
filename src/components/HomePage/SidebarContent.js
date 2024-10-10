import React from 'react';
import './SidebarContent.css'; // CSS específico para el contenido

function SidebarContent() {
    return (
        <div className="sidebar-content">
            <details>
                <summary>Materia 1</summary>
                <ul>
                    <li>Foro</li>
                    <li>Recursos</li>
                </ul>
            </details>
            <details>
                <summary>Materia 2</summary>
                <ul>
                    <li>Foro</li>
                    <li>Recursos</li>
                </ul>
            </details>
        </div>
    );
}

export default SidebarContent;
