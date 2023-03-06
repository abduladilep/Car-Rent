import{ createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { alertsReducer } from './reducers/AlertsReducer';
import { CarsReducer, } from './reducers/CarsReducers';

const composeEnhancers = composeWithDevTools({})

const rootReducer = combineReducers({
  CarsReducer,
  alertsReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));





export default store; 


