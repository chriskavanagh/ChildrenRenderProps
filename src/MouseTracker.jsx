import React from "react";
import CurrentMouseLoc from "./CurrentMouseLoc";

const MouseTracker = ({ x, y }) => {
  return (
    <CurrentMouseLoc>
      {coords => {
        return (
          <div>
            x: {coords.x}, y:{coords.y}
          </div>
        );
      }}
    </CurrentMouseLoc>
  );
};

export default MouseTracker;

// destructuring coords
/* <CurrentMouseLoc>
      {({x.y}) => {
        return (
          <div>
            x: {x}, y:{y}
          </div>
        );
      }}
    </CurrentMouseLoc> */
