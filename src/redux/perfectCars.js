import * as ActionTypes from './ActionTypes';

export const PerfectCars = (state = {
  isLoading: false,
  errMess: null,
  cars: []
},
  action) => {
  switch (action.type) {
    case ActionTypes.ADD_PerfectCars:
      return { ...state, isLoading: false, errMess: null, cars: action.payload };

    case ActionTypes.PerfectCars_LOADING:
      return { ...state, isLoading: true, errMess: null, cars: [] }

    case ActionTypes.PerfectCars_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, cars: [] };

    default:
      return state;
  }
} 