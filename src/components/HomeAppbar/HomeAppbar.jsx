import React from 'react';
import './HomeAppbar.css';
import ReloadPage from '../ReloadPage/ReloadPage';
import Network from '../Network/Network';

const HomeAppbar = ({ collapsed }) => {
  return (
    <div className={`Content ${collapsed ? 'collapsed_Header' : ''}`}>
      <div className='fila'>
        <p className='name'>Asistente Virtual</p>
        <p className='Fecha'>16 de Noviembre del 2023</p>
        <Network />
        <ReloadPage />
      </div>
    </div>
  );
};

export default HomeAppbar;
