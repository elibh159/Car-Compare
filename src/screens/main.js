import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/index";
import MyContainer from "../components/MyContainer/index";
import Box from "../components/Box/index";
import Div from "../components/Div/index";
import { PromBox } from './styles';
import SearchForm from "../screens/searchform/index";
import PerfectCollection from "../screens/perfectCollection/index";
function Main() {
  //#region redux
  const perfectCars = useSelector((state) => state.perfectCars);
  const recommendCars = useSelector((state) => state.recommendCars);

  //#endregion

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
      <h1>What do you think about these cars!?</h1>

      <Div danger hidden={recommendCars.errMess === null}>
        <p>
          Sorry, {recommendCars.errMess}.
          </p>
        <Button onClick={() => { newForm() }}>Back</Button>
      </Div>

      <PromBox>
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
      </PromBox>
      {/* </Div> */}
    </MyContainer>
  );
}

export default Main;
