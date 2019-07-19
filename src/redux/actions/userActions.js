import { LOADING_UI, SET_USER, CLEAR_ERRORS, SET_ERRORS } from "../types";
import axios from "axios";

export const LoginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  console.log("Here");
  axios
    .post("https://us-central1-social-backend-452e5.cloudfunctions.net/api/login", userData)
    .then(success => {
      console.log("Again");
      console.log(success.data);
      const FBIDToken = `Bearer ${success.data.token}`;
      console.log("You have logged in!!!");
      localStorage.setItem("FBIToken", FBIDToken);
      axios.defaults.headers.common["Authorization"] = FBIDToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch(error => {

      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
    });
};

export const signUp = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  console.log("Here");
  axios
    .post("https://us-central1-social-backend-452e5.cloudfunctions.net/api/signup", userData)
    .then(success => {
      console.log("Again");
      console.log(success.data);
      const FBIDToken = `Bearer ${success.data.token}`;
      console.log("You have logged in!!!");
      localStorage.setItem("FBIToken", FBIDToken);
      axios.defaults.headers.common["Authorization"] = FBIDToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch(error => {

      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
    });
};

export const getUserData = () => dispatch => {
  axios
    .get("https://us-central1-social-backend-452e5.cloudfunctions.net/api/user")
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
