import { GET_CARDS, NEXT_CARD } from "../Actions";

const initialState = {
  data: [],
  currentIndex: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        data: action.payload.data,
        currentIndex: state.currentIndex
      };
    case NEXT_CARD:
      return {
        data: state.data,
        currentIndex: state.currentIndex + 1
      };
    default:
      return state;
  }
};
