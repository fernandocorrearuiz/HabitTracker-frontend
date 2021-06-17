import {
  FETCH_GOALS_SUCCESS,
  GOAL_DELETE_SUCCESS,
  GOAL_CREATED_SUCCESS,
} from "./actions";

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCESS:
      return [...action.payload].sort((a, b) => {
        return a.id - b.id;
      });

    case GOAL_DELETE_SUCCESS:
      const goalId = action.payload;
      const newGoals = state.filter((goal) => goal.id !== goalId);
      return [...newGoals];

    case GOAL_CREATED_SUCCESS:
      return [...state, action.payload].sort((a, b) => {
        return a.id - b.id;
      });

    default:
      return state;
  }
};
