import { combineReducers } from "redux";
import FlashcardReducers from "./flashcard";
import AuthReducer from './auth';
import UsersReducer from './users';

const rootReducer = combineReducers({
  flashcards: FlashcardReducers,
  auth: AuthReducer,
  users: UsersReducer,
});

export default rootReducer;
