import React, { useState, useContext } from 'react';
import { useDispatch } from "react-redux";
import { getPerfectCars } from "../../redux/ActionCreator";
import { SearchItemsContext } from "../../contexts/SearchItemsContext";
import Div from "../../components/Div/index";
import Dropdwon from "../../components/Dropdown";
import Button from "../../components/Button";
import Checkbox from "../../components/CheckBox";

const Index = () => {

  const dispatch = useDispatch();


  //#region States and constants
  const [model, setModel] = useContext(SearchItemsContext);
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

  function handleInputChange(event) {
    debugger;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setModel(prevState => ({
      ...prevState,
      [name]: value
    }));

  }
  const handelResult = () => {
    setErrMsg("");
    if (!model.price) {
      setErrMsg("Ooops...! Please select your range of price ")
      return;
    }
    if (!model.color) {
      setErrMsg("Ooops...! Please select your favarite color")
      return;
    }
    dispatch(getPerfectCars(model.price, model.color, model.availability));
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
        value={model.price}
        name="price"
        title="What is the price range:"
        palceHolder="Select your option..."
        required={true}
        onChange={handleInputChange}
      />
      <Dropdwon
        options={colorList}
        value={model.color}
        name="color"
        title="What is your favourite color?"
        palceHolder="Select color..."
        required={true}
        onChange={handleInputChange}
      />
      <Checkbox
        checked={model.availability}
        onChange={handleInputChange}
        title="Availability"
        name="availability">
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
