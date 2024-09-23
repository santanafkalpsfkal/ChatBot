import React, { useState } from 'react';
import updateIcon from '../../assets/update.png'; // Asegúrate de que esta ruta sea correcta
import './ReloadPage.css';
import 'antd/dist/reset.css';

const ReloadPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div
      className={`icon-update-container ${isHovered ? 'hovered' : ''}`}
      onClick={handleReload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={updateIcon}
        alt="Update Icon"
      />
    </div>
  );
};

export default ReloadPage;
