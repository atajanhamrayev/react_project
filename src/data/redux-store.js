import { createStore, combineReducers } from "redux";
import filmsReducer from "./films-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
let reducers = combineReducers({
  filmsPage: filmsReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;
