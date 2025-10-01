import React, { useState, useEffect } from "react";

function TrafficLight() {
  const sequence = ["red", "green", "yellow"]; 
  const [current, setCurrent] = useState("red");

  const nextLight = () => {
    const currentIndex = sequence.indexOf(current);
    setCurrent(sequence[(currentIndex + 1) % sequence.length]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextLight();
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  const getLightStyle = (color) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "10px auto",
    backgroundColor: current === color ? color : "gray",
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Đèn giao thông</h2>
      <div style={getLightStyle("red")}></div>
      <div style={getLightStyle("yellow")}></div>
      <div style={getLightStyle("green")}></div>
      <button onClick={nextLight} style={{ marginTop: "10px" }}>
        Chuyển đèn
      </button>
    </div>
  );
}

export default TrafficLight;

