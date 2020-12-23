import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { PerfectCars } from './perfectCars';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      perfectCars: PerfectCars

    }),
    //applyMiddleware(thunk)
    applyMiddleware(thunk, logger)
  );

  return store;
}