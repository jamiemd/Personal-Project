import Data from "../Data";

export const GET_CARDS = "GET_CARDS";
export const NEXT_CARD = "NEXT_CARD";

export const getCards = () => {
  return {
    type: GET_CARDS,
    payload: Data
  };
};

export const nextCard = card => {
  return {
    type: NEXT_CARD,
    payload: card
  };
};
