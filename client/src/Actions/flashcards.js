import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";
export const SHOW_ANSWER = "SHOW_ANSWER";
// export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";
export const UPDATE_BUCKET = "UPDATE_BUCKET";
export const GET_COUNT = "GET_COUNT";
export const GET_STATS = "GET_STATS";
export const INCREASE_COUNT = "INCREASE_COUNT"
export const RESET_CARD_STATE = "RESET_CARD_STATE"

const ROOT_URL = 'http://localhost:5000/api';

// get flashcards from server
export const getCards = () => {
  return dispatch => {
    const apiUrl = `${ROOT_URL}/flashcards`;
    axios
      .get(apiUrl)
      .then(response => {
        console.log('getcardsaction', response);
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

export const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  };
};

export const resetCardState = () => {
  return {
    type: RESET_CARD_STATE,
  }
}

export const updateBucket = (id, newBucket) => {
  // console.log('updatebucket', id, newBucket);
  return dispatch => {
    axios
      .put(`${ROOT_URL}/updateBucket`, { id, newBucket })
      .then(res => {
        dispatch({
          type: UPDATE_BUCKET,
        })
      });
  };
};

export const getStats = () => {
  // console.log('updatebucket', id, newBucket);
  return dispatch => {
    axios
      .get(`${ROOT_URL}/getStats`, {})
      .then(res => {
        dispatch({
          type: GET_STATS,
        })
      });
  };
};
