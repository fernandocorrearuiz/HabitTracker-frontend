import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

import { selectUser } from "../user/selectors";

export const FETCH_GOALS_SUCCESS = "FETCH_GOALS_SUCCESS";
export const GOAL_DELETE_SUCCESS = "GOAL_DELETE_SUCCESS";
export const GOAL_CREATED_SUCCESS = "GOAL_CREATED_SUCCESS";
export const GOAL_UPDATED_SUCCESS = "GOAL_UPDATED_SUCCESS";

export const fetchGoalsSuccess = (goals) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: goals,
});

export const goalDeleteSuccess = (goalId) => ({
  type: GOAL_DELETE_SUCCESS,
  payload: goalId,
});

export const goalPostSuccess = (goalToPost) => ({
  type: GOAL_CREATED_SUCCESS,
  payload: goalToPost,
});

export const goalUpdated = (goal) => ({
  type: GOAL_UPDATED_SUCCESS,
  payload: goal,
});

export const fetchGoals = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      const response = await axios.get(`${apiUrl}/goals`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      dispatch(fetchGoalsSuccess(response.data.goals));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const deleteMyGoal = (goalId) => {
  return async (dispatch, getState) => {
    await axios.delete(`${apiUrl}/goals/${goalId}`);
    // console.log("Goal deleted?", response.data);
    dispatch(goalDeleteSuccess(goalId));
  };
};

export const postMyNewGoal = (title, objective, currentLevel) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    dispatch(appLoading());
    const response = await axios.post(
      `${apiUrl}/goals/goal`,
      { title, objective, currentLevel },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    // console.log("Yep!", response.data);
    dispatch(goalPostSuccess(response.data.newGoal));
    dispatch(appDoneLoading());
  };
};

export const updateMyGoal = (goalId, currentLevel, objective) => {
  return async (dispatch, getState) => {
    // console.log(goalId, currentLevel, objective);
    const response = await axios.patch(`${apiUrl}/goals/${goalId}`, {
      currentLevel,
      objective,
    });
    // console.log(response.data);
    dispatch(goalUpdated(response.data.goal));
  };
};
