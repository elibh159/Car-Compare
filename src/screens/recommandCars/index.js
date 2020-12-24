import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { SearchItemsContext } from "../../contexts/SearchItemsContext";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import Div from "../../components/Div/index";
import Button from "../../components/Button/index";
import Box from "../../components/Box/index";
import { PromBox } from './styles';

const Index = () => {
  const recommendCars = useSelector((state) => state.recommendCars);

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
    </div>
  )
}

export default Index
