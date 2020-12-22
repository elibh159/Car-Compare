import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPerfectCars } from "../redux/ActionCreator"
import Dropdwon from "../components/Dropdown/index";
import Button from "../components/Button/index";
import MyContainer from "../components/MyContainer/index";

function Main() {
  //#region redux
  const perfectCars = useSelector(state => state.perfectCars)
  const dispatch = useDispatch();
  //#endregion

  //#region States and constants
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
  //#endregion

  const handelResult = () => {
    console.log("price:" + price + " color:" + color);

    dispatch(getPerfectCars(price, color, 6));

  }
  return (
    <MyContainer>
      <h1>Car Selection Form</h1>
      {JSON.stringify(perfectCars)}
      <Dropdwon
        options={priceList}
        value={price}
        title="What is the price range:"
        palceHolder="Select your option"
        onChange={(e) => { setPrice(e.target.value); }} />
      <Dropdwon
        options={colorList}
        value={color}
        title="What is your favourite color?"
        palceHolder="Select color"
        onChange={(e) => { setColor(e.target.value); }} />
      <Button onClick={() => { handelResult() }}>Result</Button>
    </MyContainer>
  )
}

export default Main
