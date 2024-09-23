// src/components/TopMenu.js
import React, { useState, useEffect } from 'react';
import Network from '../Network/Network'; // Asegúrate de tener este archivo en la ruta indicada
import ReloadPage from '../ReloadPage/ReloadPage'; // Asegúrate de tener este archivo en la ruta indicada
import './TopMenu.css'; // Asegúrate de tener este archivo en la ruta indicada
import { Switch, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const TopMenu = ({ theme, toggleTheme, collapsed, toggleCollapse }) => {
    // Formato de fecha con nombre del mes
    const [date, setDate] = useState(new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }));
        }, 60000); // Actualiza la fecha cada minuto

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`top-menu ${theme === 'dark' ? 'top-menu-dark' : 'top-menu-light'} ${collapsed ? 'top-menu-collapsed' : ''}`}
        >
            <div className="left-side">
            <Button
                type="primary"
                onClick={toggleCollapse}
                style={{
                    marginBottom: 16,
                    backgroundColor: theme === 'dark' ? '#001529' : '#fff',
                    borderColor: theme === 'dark' ? '#001529' : '#fff',
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            </div>
            <div className="right-side">
                <div className="date-display">
                    {date}
                </div>
                <div className="reload-page">
                    <ReloadPage />
                </div>
                <div className="network-status">
                    <Network />
                </div>
                
            </div>
        </div>
    );
};

export default TopMenu;
