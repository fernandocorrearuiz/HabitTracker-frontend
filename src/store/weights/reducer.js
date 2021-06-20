import { FETCH_WEIGHTS_SUCCESS, WEIGHT_CREATED_SUCCESS } from "./actions";

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEIGHTS_SUCCESS:
      return [...action.payload].sort((a, b) => {
        return b.date - a.date;
      });

    case WEIGHT_CREATED_SUCCESS:
      return [...state, action.payload].sort((a, b) => {
        return a.id - b.id;
      });
    default:
      return state;
  }
};
