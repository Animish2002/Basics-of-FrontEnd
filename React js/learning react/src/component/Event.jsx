import React, { useState } from "react";

const Event = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "200px", border: "1px solid black" }}
    >
      Moved Mouse to {position.x} : {position.y}
    </div>
  );
};

export default Event;
