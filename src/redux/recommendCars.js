import * as ActionTypes from './ActionTypes';

export const RecommendCars = (state = {
  isLoading: false,
  errMess: null,
  cars: []
},
  action) => {
  switch (action.type) {
    case ActionTypes.ADD_RecommendCars:
      return { ...state, isLoading: false, errMess: null, cars: action.payload };

    case ActionTypes.RecommendCars_LOADING:
      return { ...state, isLoading: true, errMess: null, cars: [] }

    case ActionTypes.RecommendCars_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, cars: [] };

    default:
      return state;
  }
} 