import React, { useState } from "react";
import "../../styles/index.css"; 

export function Home() {
  const [selectedColor, setSelectedColor] = useState("red"); 

  return (
    <div className="traffic-light-container">
      {/* Poste del semáforo */}
      <div className="traffic-light-pole"></div>

      {/* Cuerpo del semáforo */}
      <div className="traffic-light">
        <div
          onClick={() => setSelectedColor("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={"light green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
      </div>
    </div>
  );
}

export default Home;
