import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialState = {
    city: 'Puebla, mx'
};


export const store = createStore(city,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
