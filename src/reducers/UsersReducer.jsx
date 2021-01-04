import _ from "lodash";
import {
  CREATE_USER,
  FETCH_USER,
  FETCH_USERS,
  EDIT_USER,
} from "../actions/types";

export const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, [action.payload.name]: action.payload };
    case FETCH_USER:
      return { ...state, [action.payload.name]: action.payload };
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "name") };
    case EDIT_USER:
      return { ...state, [action.payload.name]: action.payload };
    default:
      return state;
  }
};
