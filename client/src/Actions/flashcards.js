import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";
export const SHOW_ANSWER = "SHOW_ANSWER";
// export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";
export const UPDATE_BUCKET = "UPDATE_BUCKET";
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

export const updateBucket = (id, newBucket, newDate) => {
  console.log('updatebucket', id, newBucket, newDate);
  return dispatch => {
    axios
      .put(`${ROOT_URL}/updateBucket`, { id, newBucket, newDate })
      .then(res => {
        dispatch({
          type: UPDATE_BUCKET
        })
      });
  };
};
