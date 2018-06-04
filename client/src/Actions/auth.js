import axios from "axios";
axios.defaults.withCredentials = true;
const ROOT_URL = "http://localhost:5000/api";

export const USER_REGISTERED = "USER_REGISTERED";
export const USER_AUTHENTICATED = "USER_AUTHENTICATED";
export const USER_UNAUTHENTICATED = "USER_UNAUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const GET_USERS = "GET_USERS";
export const CHECK_IF_AUTHENTICATED = "CHECK_IF_AUTHENTICATED";

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const signup = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError("Passwords do not match"));
      return;
    }
    axios
      .post(`${ROOT_URL}/signup`, { username, password })
      .then(res => {
        dispatch({
          type: USER_REGISTERED
        });
        history.push("/signin");
      })
      .catch(err => {
        console.log(err);
        dispatch(authError("Failed to register user"));
      });
  };
};

export const signin = (username, password, history) => {
  console.log("history", history);
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signin`, { username, password })
      .then(res => {
        dispatch({
          type: USER_AUTHENTICATED
        });
        history.push("/home");
      })
      .catch(() => {
        dispatch(authError("Incorrect email/password combo"));
      });
  };
};

export const signout = history => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signout`, { history })
      .then(() => {
        dispatch({
          type: USER_UNAUTHENTICATED
        });
        history.push("/");
      })
      .catch(() => {
        dispatch(authError("Failed to log you out"));
      });
  };
};
