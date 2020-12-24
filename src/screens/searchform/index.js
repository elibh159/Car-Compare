import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPerfectCars } from "../../redux/ActionCreator";
import Div from "../../components/Div/index";
import Dropdwon from "../../components/Dropdown";
import Button from "../../components/Button";
import Checkbox from "../../components/CheckBox";

const Index = () => {

  const dispatch = useDispatch();

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
    dispatch(getPerfectCars(price, color, availability));
    setShowForm(false);
  };
  //#endregion
  return (
    <div>
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

    </div>
  )
}

export default Index;
