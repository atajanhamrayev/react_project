import { createStore, combineReducers } from "redux";
import filmsReducer from "./films-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  filmsPage: filmsReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
