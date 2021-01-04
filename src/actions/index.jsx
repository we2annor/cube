import { CREATE_USER, FETCH_USERS, FETCH_USER, EDIT_USER } from "./types";
import history from "../history";
import players from "../apis/players";

export const createUser = (formValues) => async (dispatch) => {
  const user = { username: formValues.Name, score: formValues.Score };
  const response = await players.post("/process-user", user);

  const newEntrant = Object.values(response.data)
    .map((result) => result)
    .toString();

  const newUser = {
    name: newEntrant,
    score: formValues.Score,
    status: "No change",
    imageLink: "/image",
  };

  dispatch({ type: CREATE_USER, payload: newUser });
  history.push("/");
};

export const fetchUser = (name) => async (dispatch) => {
  console.log("name", name);
  const response = await players.get(`/starting-state/${name}`);

  console.log("response", response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await players.get("/starting-state");

  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const editUser = (name, formValues) => async (dispatch) => {
  console.log("edit user", name, formValues);
  const response = await players.patch(`/starting-state/${name}`, formValues);

  dispatch({ type: EDIT_USER, payload: response.data });
  history.push("/");
};
