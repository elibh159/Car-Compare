import React, { useState } from "react";
import MyContainer from "../components/MyContainer/index";
import SearchForm from "../screens/searchform/index";
import PerfectCollection from "../screens/perfectCollection/index";
import RecommandCars from "../screens/recommandCars/index";

function Main() {
  //#region States and constants
  const [showForm, setShowForm] = useState(true);
  //#endregion

  //#region Funcion
  const newForm = () => {
    setShowForm(true);
    // setColor("");
    //setPrice("");
  }
  //#endregion

  return (
    <MyContainer>
      {/* <Div hidden={!showForm}> */}
      <SearchForm />

      {/* </Div> */}
      {/* <Div hidden={showForm}> */}
      <PerfectCollection />
      <RecommandCars />
      {/* </Div> */}
    </MyContainer>
  );
}

export default Main;
