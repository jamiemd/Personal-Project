import { GET_CARDS, NEXT_CARD, SHOW_ANSWER, NO_PRESSED, YES_PRESSED } from "../Actions/flashcards";

const initialState = {
  data: [],
  currentIndex: 0,
  cardSide: "front",
  bucket: "1"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      //console.log("action.payload.data[0].id", action.payload.data[0].id, "");
      //console.log("action.payload.data", action.payload.data);
      return {
        ...state,
        data: action.payload,
        currentIndex: 0
      };
    case NEXT_CARD:
      // console.log("state.data", state.data);
      // console.log("state.currentIndex", state.currentIndex);
      return {
        ...state,
        data: state.data,
        currentIndex: state.currentIndex + 1,
        cardSide: "front"
      };
    case SHOW_ANSWER:
      // console.log("state.data", state.data);
      // console.log("cardSide", state.cardSide);
      return {
        ...state,
        data: state.data,
        cardSide: "back"
      };
    case NO_PRESSED:
      return {
        ...state,
        bucket: state.bucket - 1,
      };
    case YES_PRESSED:
      return {
        ...state,
        bucket: state.bucket + 1,
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
