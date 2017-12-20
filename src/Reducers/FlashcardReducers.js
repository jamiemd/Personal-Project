import { GET_CARDS, NEXT_CARD } from "../Actions";

export default (flashcards = [], action) => {
  switch (action.type) {
    case GET_CARDS:
      return action.payload;
    case NEXT_CARD:
      return action.payload.data;
    default:
      return flashcards;
  }
};
