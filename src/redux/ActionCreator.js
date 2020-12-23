import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../constants/appContact";

//#region  Get Perfect Cars
export const getPerfectCars = (PriceRange, Color, Count) => (dispatch) => {
  dispatch(PerfectCarsLoading());
  return axios
    .get(baseUrl + "cars/color/" + Color, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
    })
    .then((response) => {
      debugger;
      let TempPriceRange = PriceRange.replace(/[$]/g, "").split("-");
      let minPrice = Number(TempPriceRange[0]);
      let maxPrice = Number(TempPriceRange[1]);

      const res = response.data.Cars;
      let newList = res
        .map(({ price, ...rest }) => ({
          price: Number(price.replace("$", "")),
          ...rest,
        }))
        .filter((m) => m.price > minPrice && m.price < maxPrice)
        .sort(compareValues("car_model_year", "desc"))
        .slice(0, Count);

      dispatch(AddPerfectCars(newList));
    })
    .catch((error) => dispatch(PerfectCarsFailed(error.message)));
};
export const PerfectCarsFailed = (errmess) => ({
  type: ActionTypes.PerfectCars_FAILED,
  payload: errmess,
});

export const AddPerfectCars = (setting) => ({
  type: ActionTypes.ADD_PerfectCars,
  payload: setting,
});
export const PerfectCarsLoading = () => ({
  type: ActionTypes.PerfectCars_LOADING,
});

//#endregion

//#region sort
function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}
//#endregion