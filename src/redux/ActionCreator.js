import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../constants/appContact';


//#region  Get Perfect Cars
export const getPerfectCars = (PriceRange, Color, Count) => (dispatch) => {
  debugger;
  dispatch(PerfectCarsLoading());
  return axios.get(baseUrl + 'cars/color/' + Color, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    credentials: 'same-origin'
  }).then(response => {
    debugger;
    let TempPriceRange = PriceRange.split('-');
    let minPrice = Number(TempPriceRange[0].replace('$', ''));
    let maxPrice = Number(TempPriceRange[1].replace('$', ''));


    const res = response.data.Cars;
    let newList = res.map(({ price, ...rest }) => ({
      price: Number(price.replace('$', '')),
      ...rest,
    }));
    newList = newList.filter(m => m.price > minPrice && m.price < maxPrice);

    dispatch(AddPerfectCars(newList))
  })
    .catch(error => dispatch(PerfectCarsFailed(error.message)));

}
export const PerfectCarsFailed = (errmess) => ({
  type: ActionTypes.PerfectCars_FAILED,
  payload: errmess
});

export const AddPerfectCars = (setting) => ({
  type: ActionTypes.ADD_PerfectCars,
  payload: setting
});
export const PerfectCarsLoading = () => ({
  type: ActionTypes.PerfectCars_LOADING
});

//#endregion
