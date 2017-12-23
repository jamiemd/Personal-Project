import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";

export const getCards = () => {
  const apiUrl = "http://localhost:5000/api/flashcards";
  const moviesRequest = axios.get(apiUrl);
  return {
    type: GET_CARDS,
    payload: moviesRequest
  };
};

export const nextCard = card => {
  const promise = axios.post("http://localhost:5000/api/flashcards/", card);
  return {
    type: NEXT_CARD,
    payload: promise
  };
};
