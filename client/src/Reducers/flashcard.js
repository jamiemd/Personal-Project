import { GET_CARDS, NEXT_CARD, SHOW_ANSWER } from "../Actions/flashcards";

const initialState = {
  data: [],
  currentIndex: 0,
  cardSide: "front",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      // console.log("action.payload.data", action.payload);
      return {
        ...state,
        data: action.payload,
        currentIndex: 0
      };
    case NEXT_CARD:
      return {
        ...state,
        data: state.data,
        currentIndex: state.currentIndex + 1,
        cardSide: "front"
      };
    case SHOW_ANSWER:
      return {
        ...state,
        data: state.data,
        cardSide: "back"
      };
    // case TOGGLE_LANGUAGE:
    //   // console.log("state.currentLanguage", state.currentLanguage);
    //   if (state.currentLanguage === "english") {
    //     state.currentLanguage = "tagalog";
    //   } else {
    //     state.currentLanguage = "english";
    //   }
    // return {
    //   ...state,
    //   data: state.data,
    //   currentLanguage: state.currentLanguage
    // };
    default:
      return state;
  }
};
