import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfectCars } from "../redux/ActionCreator";
import Dropdwon from "../components/Dropdown/index";
import Button from "../components/Button/index";
import MyContainer from "../components/MyContainer/index";
import Box from "../components/Box/index";
import Checkbox from "../components/CheckBox/index";
import { Div } from './styles';

function Main() {
  //#region redux
  const perfectCars = useSelector((state) => state.perfectCars);
  const recommendCars = useSelector((state) => state.recommendCars);

  const dispatch = useDispatch();
  //#endregion

  //#region States and constants
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [availability, setAvailability] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [errMsg, setErrMsg] = useState("");

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
  //#region Funcion
  const handelResult = () => {
    setErrMsg("");
    if (!price) {
      setErrMsg("Ooops...! Please select your range of price ")
      return;
    }
    if (!color) {
      setErrMsg("Ooops...! Please select your favarite color")
      return;
    }
    dispatch(getPerfectCars(price, color, availability, 6));
    setShowForm(false);
  };

  const newForm = () => {
    setShowForm(true);
    setColor("");
    setPrice("");
  }
  //#endregion

  return (
    <MyContainer>
      <Div hidden={!showForm}>
        <h1>Car Selection Form</h1>
        <Div danger hidden={errMsg === ""}>
          <p>
            {errMsg}
          </p>
        </Div>
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
      </Div>
      <Div hidden={showForm}>
        <h1>Your perfect car collection</h1>
        <Div danger hidden={perfectCars.cars.length > 0}>
          <p>
            Sorry, could not find a Car.
          </p>
          <Button onClick={() => { newForm() }}>Back</Button>
        </Div>
        {perfectCars.cars &&
          perfectCars.cars.map((item) => (
            <Box
              key={item.id}
              price={'$' + item.price}
              name={item.car}
              model={item.car_model}
              color={item.car_color}
            />
          ))}
        <h1>What do you think about these cars!?</h1>
        <div>
          {recommendCars.cars &&
            recommendCars.cars.map((item) => (
              <Box
                prominent
                key={item.id}
                price={item.price}
                name={item.car}
                model={item.car_model}
                color={item.car_color}
              />
            ))}
        </div>
      </Div>
    </MyContainer>
  );
}

export default Main;
