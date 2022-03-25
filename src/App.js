import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
/* import swimPic from "../src/images/swimmer.png";
import bridePic from "../src/images/bride.png";
import bikePic from "../src/images/bike.png"; */
import data from "./components/data";

function App() {
  let cardElements = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;
