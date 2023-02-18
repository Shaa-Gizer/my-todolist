import {combineReducers, createStore} from "redux";
import {homeReducer} from "./home-reducer";

const home = combineReducers({
    home: homeReducer
})

export const store = createStore(home)
