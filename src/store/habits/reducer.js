import {
  FETCH_HABITS_SUCCESS,
  CONSECUTIVE_DAYS_UPDATED,
  CONSECUTIVE_DAYS_RESET_TO_ZERO,
} from "./actions";

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HABITS_SUCCESS:
      return [...state, ...action.payload];

    case CONSECUTIVE_DAYS_UPDATED:
      const previousState = state.filter(
        (habit) => habit.id !== action.payload.id
      );
      const sortedToSolveTrouble = [...previousState, action.payload].sort(
        (a, b) => {
          return a.id - b.id;
        }
      );
      return sortedToSolveTrouble;

    case CONSECUTIVE_DAYS_RESET_TO_ZERO:
      const filteredState = state.filter(
        (habit) => habit.id !== action.payload.id
      );
      const sortedfilteredState = [...filteredState, action.payload].sort(
        (a, b) => {
          return a.id - b.id;
        }
      );
      return sortedfilteredState;

    default:
      return state;
  }
};
