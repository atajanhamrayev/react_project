import { createStore, combineReducers } from "redux";
import filmsReducer from "./films-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  filmsPage: filmsReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
