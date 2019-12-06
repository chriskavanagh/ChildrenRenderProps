import { useState, useEffect } from "react";

const CurrentMouseLoc = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
      console.log(coords);
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return children(coords);
};

export default CurrentMouseLoc;
