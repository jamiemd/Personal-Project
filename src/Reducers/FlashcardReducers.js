import { NEXT_CARD } from "../Actions";
import { Data } from "../Data";

const defaultData = Data;

export default (flashcards = defaultData, action) => {
  switch (action.type) {
    case NEXT_CARD:
      return flashcards;
    default:
      return flashcards;
  }
};
