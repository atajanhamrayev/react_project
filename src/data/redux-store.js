import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import filmsReducer from "./films-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  filmsPage: filmsReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
