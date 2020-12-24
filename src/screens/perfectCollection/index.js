import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { SearchItemsContext } from "../../contexts/SearchItemsContext";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import Button from "../../components/Button/index";
import Box from "../../components/Box/index";
import Div from "../../components/Div/index";
const Index = () => {
  const perfectCars = useSelector((state) => state.perfectCars);

  const [, setModel] = useContext(SearchItemsContext);
  const [, setActivePage] = useContext(ActivePageContext);
  const newForm = () => {
    setActivePage("SearchForm");
    setModel({
      color: "",
      price: "",
      availability: false
    });
  }
  return (
    <div>
      <h1>Your perfect car collection</h1>

      <Div danger hidden={perfectCars.cars.length > 0 || perfectCars.errMess !== null}>
        <p>
          Sorry, could not find a Car.
        </p>
        <Button onClick={() => { newForm() }}>Back</Button>
      </Div>
      <Div danger hidden={perfectCars.errMess === null}>
        <p>
          Sorry, {perfectCars.errMess}.
         </p>
        <Button onClick={() => { newForm() }}>Back</Button>
      </Div>

      <Div hidden={perfectCars.cars.length === 0}>
        <Button secondary onClick={() => { newForm() }}>
          Back to search
        </Button>
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
    </div>
  )
}

export default Index
