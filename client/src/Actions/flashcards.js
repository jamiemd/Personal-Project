import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";
export const SHOW_ANSWER = "SHOW_ANSWER";
export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";

// get flashcards from server
export const getCards = () => {
  return dispatch => {
    const apiUrl = "http://localhost:5000/api/flashcards";
    const flashcardRequest = axios
      .get(apiUrl)
      .then(response => {
        dispatch({
          type: GET_CARDS,
          payload: response.data
        });
      });
  };
};

export const nextCard = card => {
  const promise = axios.get("http://localhost:5000/api/flashcards", card);
  return {
    type: NEXT_CARD,
    payload: promise
  };
};

export const showAnswer = answer => {
  const promise = axios.get("http://localhost:5000/api/flashcards", answer);
  return {
    type: SHOW_ANSWER,
    payload: promise
  };
};

// export const toggleLanguage = language => {
//   const promise = axios.get("http://localhost:5000/api/flashcards", language);
//   return {
//     type: TOGGLE_LANGUAGE,
//     payload: promise
//   };
// };