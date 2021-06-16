import {
  FETCH_HABITS_SUCCESS,
  CONSECUTIVE_DAYS_UPDATED,
  CONSECUTIVE_DAYS_RESET_TO_ZERO,
  HABIT_DELETED_SUCCESS,
  HABIT_CREATED_SUCCESS,
} from "./actions";

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HABITS_SUCCESS:
      return [...action.payload].sort((a, b) => {
        return a.id - b.id;
      });

    case CONSECUTIVE_DAYS_UPDATED:
      const previousState = state.filter(
        (habit) => habit.id !== action.payload.id
      );
      const sortedPreviousState = [...previousState, action.payload].sort(
        (a, b) => {
          return a.id - b.id;
        }
      );
      return sortedPreviousState;

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

    case HABIT_DELETED_SUCCESS:
      const stateWithoutHabitToDelete = state.filter((habit) => {
        return habit.id !== action.payload.id;
      });
      const sortedStateWithoutHabitToDelete = [
        ...stateWithoutHabitToDelete,
      ].sort((a, b) => {
        return a.id - b.id;
      });
      return sortedStateWithoutHabitToDelete;

    case HABIT_CREATED_SUCCESS:
      return [...state, action.payload].sort((a, b) => {
        return a.id - b.id;
      });

    default:
      return state;
  }
};
