import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfectCars } from "../redux/ActionCreator";
import Dropdwon from "../components/Dropdown/index";
import Button from "../components/Button/index";
import MyContainer from "../components/MyContainer/index";
import Box from "../components/Box/index";
import Checkbox from "../components/CheckBox/index";


function Main() {
  //#region redux
  const perfectCars = useSelector((state) => state.perfectCars);
  const dispatch = useDispatch();
  //#endregion

  //#region States and constants
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [availability, setAvailability] = useState(false);
  const priceList = [
    "$1000-$2000",
    "$2000-$3000",
    "$3000-$4000",
    "$20000-22000",
  ];

  const colorList = [
    "Blue",
    "Pink",
    "Green",
    "Khaki",
    "Indigo",
    "Puce",
    "Crimson",
  ];
  //#endregion

  const handelResult = () => {
    console.log("price:" + price + " color:" + color);
    if (!price) {
      alert("What is the price range?")
      return;
    }
    if (!color) {
      alert("What is your favourite color?")
      return;
    }
    dispatch(getPerfectCars(price, color, availability, 6));
  };

  return (
    <MyContainer>
      <div>
        <h1>Car Selection Form</h1>
        <Dropdwon
          options={priceList}
          value={price}
          title="What is the price range:"
          palceHolder="Select your option..."
          required={true}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Dropdwon
          options={colorList}
          value={color}
          title="What is your favourite color?"
          palceHolder="Select color..."
          required={true}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <Checkbox
          checked={availability}
          onChange={() => { setAvailability(!availability) }}
          title="Availability">
        </Checkbox>

        <Button
          onClick={() => {
            handelResult();
          }}
        >
          Result
        </Button>
      </div>
      <div>
        <h1>Your perfect car collection</h1>
        {perfectCars.cars &&
          perfectCars.cars.map((item) => (
            <Box
              key={item.id}
              price={item.price}
              name={item.car}
              model={item.car_model}
              color={item.car_color}
            ></Box>
          ))}
      </div>
    </MyContainer>
  );
}

export default Main;
