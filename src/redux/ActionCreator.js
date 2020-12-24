import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl, recommandCount, resultCount } from "../constants/appContact";

//#region  Get Perfect Cars
export const getPerfectCars = (PriceRange, Color, Availability, Count) => (dispatch) => {
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
        .filter((m) => m.price > minPrice && m.price < maxPrice && m.availability === Availability)
        .sort(compareValues("car_model_year", "desc"))
        .slice(0, resultCount);
      dispatch(AddPerfectCars(newList));
      debugger;
      let brand = (newList.length > 0 ? newList[0].car : "Mitsubishi")
      dispatch(getRecommendCars(brand));
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





//#region  Get Recommended Cars
export const getRecommendCars = (Brand = "Mitsubishi") => (dispatch) => {
  debugger;
  dispatch(RecommendCarsLoading());
  return axios
    .get(baseUrl + "cars/name/" + Brand, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
    })
    .then((response) => {
      const res = response.data.Cars
        .sort(compareValues("car_model_year", "desc"))
        .slice(0, recommandCount);
      dispatch(AddRecommendCars(res));
    })
    .catch((error) => dispatch(RecommendCarsFailed(error.message)));
};
export const RecommendCarsFailed = (errmess) => ({
  type: ActionTypes.RecommendCars_FAILED,
  payload: errmess,
});

export const AddRecommendCars = (setting) => ({
  type: ActionTypes.ADD_RecommendCars,
  payload: setting,
});
export const RecommendCarsLoading = () => ({
  type: ActionTypes.RecommendCars_LOADING,
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
