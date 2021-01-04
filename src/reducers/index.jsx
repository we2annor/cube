import { combineReducers } from "redux";
import { UsersReducer } from "./UsersReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users: UsersReducer,
  form: formReducer,
});
