import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";
export const SHOW_ANSWER = "SHOW_ANSWER";
// export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";
export const NO_PRESSED = "NO_PRESSED";
export const YES_PRESSED = "YES_PRESSED";
const ROOT_URL = 'http://localhost:5000/api';

// get flashcards from server
export const getCards = () => {
  return dispatch => {
    const apiUrl = `${ROOT_URL}/flashcards`;
    axios
      .get(apiUrl)
      .then(response => {
        dispatch({
          type: GET_CARDS,
          payload: response.data
        });
      });
  };
};

export const nextCard = () => {
  return {
    type: NEXT_CARD,
  };
};

export const showAnswer = () => {
  return {
    type: SHOW_ANSWER,
  };
};

export const noPressed = bucket => {
  console.log('NObucket', bucket);
  return dispatch => {
    axios
      .post(`${ROOT_URL}/updateBucket`, { bucket })
      .then(res => {
        dispatch({
          type: NO_PRESSED
        })
      });
  };
};


export const yesPressed = (bucket) => {
  console.log('YESbucket', bucket);
  return dispatch => {
    axios
      .post(`${ROOT_URL}/updateBucket`, { bucket })
      .then(res => {
        dispatch({
          type: YES_PRESSED
        });
      });
  };
};

