// src/components/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css';
import backgroundVideo from '../../assets/2.mp4'; // Ajusta la ruta según la ubicación de tu archivo

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};

export default BackgroundVideo;
