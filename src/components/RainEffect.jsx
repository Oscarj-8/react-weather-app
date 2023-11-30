import React, { useEffect, useState } from "react";

const RainEffect = () => {
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    const generateRandomDrop = () => ({
      id: Date.now(),
      left: `${Math.random() * 100}vw`,
      animationDuration: `${1 + Math.random() * 2}s`,
      animationDelay: `${Math.random()}s`,
    });

    const createRain = () => {
      const newRainDrops = Array.from({ length: 100 }, generateRandomDrop);
      setRainDrops(newRainDrops);
    };

    createRain();
  }, []);

  return (
    <div className="rain-container">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;
