import { GET_CARDS, NEXT_CARD, TOGGLE_LANGUAGE } from "../Actions";

const initialState = {
  data: [],
  currentIndex: 0,
  currentLanguage: "english"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      //console.log("action.payload.data[0].id", action.payload.data[0].id, "");
      //console.log("action.payload.data", action.payload.data);
      //console.log("action.payload", action.payload);
      return {
        ...state,
        data: action.payload.data,
        currentIndex: state.currentIndex
      };
    case NEXT_CARD:
      // console.log("state.data", state.data);
      // console.log("state.currentIndex", state.currentIndex);
      return {
        ...state,
        data: state.data,
        currentIndex: state.currentIndex + 1
      };
    case TOGGLE_LANGUAGE:
      // console.log("state.currentLanguage", state.currentLanguage);
      if (state.currentLanguage === "english") {
        state.currentLanguage = "tagalog";
      } else {
        state.currentLanguage = "english";
      }
      return {
        ...state,
        data: state.data,
        currentLanguage: state.currentLanguage
      };
    default:
      return state;
  }
};
