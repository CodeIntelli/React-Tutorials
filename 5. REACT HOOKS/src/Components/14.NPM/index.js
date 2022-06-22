import React from "react";
import Clock from "react-digital-clock";
// NPM stands for node package manager
const Index = () => {
  return (
    <div style={{ backgroundColor: "black", padding: 15 }}>
      <Clock hour12={false} format={"hh-mm"} />
    </div>
  );
};

export default Index;
