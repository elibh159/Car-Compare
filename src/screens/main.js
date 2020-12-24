import React, { useContext } from "react";
import { ActivePageContext } from "../contexts/ActivePageContext";
import MyContainer from "../components/MyContainer/index";
import Div from "../components/Div/index";
import SearchForm from "../screens/searchform/index";
import PerfectCollection from "../screens/perfectCollection/index";
import RecommandCars from "../screens/recommandCars/index";

function Main() {
  const [activePage,] = useContext(ActivePageContext);

  return (
    <MyContainer>
      <Div hidden={activePage === "Collection"}>
        <SearchForm />
      </Div>
      <Div hidden={activePage === "SearchForm"}>
        <PerfectCollection />
        <RecommandCars />
      </Div>
    </MyContainer>
  );
}

export default Main;
