import React, { useState } from 'react';
import Dropdwon from "../components/Dropdown/index";
import Button from "../components/Button/index";
function Main() {
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");

  const priceList = [
    "$1000-$2000",
    "$2000-$3000",
    "$3000-$4000",
    "$20000-22000"];

  const colorList = [
    "Blue",
    "Pink",
    "Green",
    "Khaki",
    "Indigo",
    "Puce",
    "Crimson"
  ];

  return (
    <div>
      <h1>Car Selection Form</h1>
      <Dropdwon
        options={priceList}
        value={price}
        title="What is the price range:"
        palceHolder="Select your option"
        onChange={(e) => { setPrice(e.target.value); }} />
      <Dropdwon
        options={colorList}
        value={color}
        title="What is your favourite colour?"
        palceHolder="Select colur"
        onChange={(e) => { setColor(e.target.value); }} />
      <Button onClick={() => { }}>Result</Button>
    </div>
  )
}

export default Main
