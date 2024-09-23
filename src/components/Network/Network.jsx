import React, { useState, useEffect } from "react";
import networkLost from "../../assets/networkLost.gif";
import connected from "../../assets/connected.gif";
import intermediate from "../../assets/intermediate.gif";

function Network() {
  const [status, setStatus] = useState("disconnected");
  const [isHovered, setIsHovered] = useState(false);

  const handleOnline = () => {
    console.log("Connected to network.");
    setStatus("connected");
  };

  const handleOffline = () => {
    console.log("Network connection lost.");
    setStatus("disconnected");
  };

  const handleConnectionChange = () => {
    try {
      const connection =
        navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const speed = connection.downlink;

        if (speed >= 2 && speed <= 10) {
          setStatus("intermediate"); 
        } else if (speed > 10) {
          setStatus("connected");
        } else {
          setStatus("disconnected");
        }
      }
    } catch (error) {
      console.error("Error getting connection information:", error);
    }
  };

  useEffect(() => {
    const getInitialStatus = () => (navigator.onLine ? "connected" : "disconnected");

    setStatus(getInitialStatus());

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("change", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("change", handleConnectionChange);
    };
  }, []);

  return (
    <div className={`Icon_Wifi-container ${isHovered ? 'hovered' : ''}`}>
      {status === "connected" ? (
        <img
          src={connected}
          width={30} // Ajusta el tamaño de la imagen
          alt="Connected to the internet"
          className="Icon_Wifi"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : status === "disconnected" ? (
        <img
          src={networkLost}
          width={30} // Ajusta el tamaño de la imagen
          alt="Network connection lost"
          className="Icon_Wifi"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : status === "intermediate" ? (
        <img
          src={intermediate}
          width={30} // Ajusta el tamaño de la imagen
          alt="Intermediate connection"
          className="Icon_Wifi"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : null}
    </div>
  );
}

export default Network;
