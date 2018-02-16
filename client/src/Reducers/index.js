import { combineReducers } from "redux";
import FlashcardReducers from "./flashcard";
import AuthReducer from './auth';
import UsersReducer from './users';
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  flashcards: FlashcardReducers,
  auth: AuthReducer,
  users: UsersReducer,
  form: FormReducer
});

export default rootReducer;
