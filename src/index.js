import React from "react";
import ReactDOM from "react-dom";
import MouseTracker from "./MouseTracker";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MouseTracker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
