import { FETCH_GOALS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCESS:
      return [...action.payload].sort((a, b) => {
        return a.id - b.id;
      });
    default:
      return state;
  }
};
