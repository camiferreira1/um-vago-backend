import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarContent from './SidebarContent';
import './Sidebar.css'; // CSS específico para el layout general

function Sidebar() {
    return (
        <div className="sidebar-container">
            <SidebarMenu />
            <SidebarContent />
        </div>
    );
}

export default Sidebar;
