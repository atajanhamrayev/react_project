import { createStore, combineReducers } from "redux";
import filmsReducer from "./films-reducer";
import messageReducer from "./messages-reducer";

let reducers = combineReducers({
  filmsPage: filmsReducer,
  messagesPage: messageReducer,
});

let store = createStore(reducers);

export default store;
