import { combineReducers } from "redux";
import FlashcardReducers from "./FlashcardReducers";

const rootReducer = combineReducers({
  flashcards: FlashcardReducers
});

export default rootReducer;
