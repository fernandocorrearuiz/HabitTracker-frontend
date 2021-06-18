import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_HABITS_SUCCESS = "FETCH_HABITS_SUCCESS";
export const CONSECUTIVE_DAYS_UPDATED = "CONSECUTIVE_DAYS_UPDATED";
export const CONSECUTIVE_DAYS_RESET_TO_ZERO = "CONSECUTIVE_DAYS_RESET_TO_ZERO";
export const HABIT_DELETED_SUCCESS = "HABIT_DELETED_SUCCESS";
export const HABIT_CREATED_SUCCESS = "HABIT_CREATED_SUCCESS";

export const fetchHabitsSuccess = (habits) => ({
  type: FETCH_HABITS_SUCCESS,
  payload: habits,
});

export const dayAddedOnHabit = (habit) => ({
  type: CONSECUTIVE_DAYS_UPDATED,
  payload: habit,
});

export const daysResetToZeroOnHabit = (habit) => ({
  type: CONSECUTIVE_DAYS_RESET_TO_ZERO,
  payload: habit,
});

export const habitDeleteSuccess = (habitId) => ({
  type: HABIT_DELETED_SUCCESS,
  payload: habitId,
});

export const habitPostSuccess = (habitToPost) => ({
  type: HABIT_CREATED_SUCCESS,
  payload: habitToPost,
});

export const fetchHabits = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/habits`);
      // console.log(response.data);
      dispatch(fetchHabitsSuccess(response.data.habits));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const dayAddHabit = (habitId) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/habits/${habitId}`);
    // console.log(response.data);
    dispatch(dayAddedOnHabit(response.data.habit));
  };
};

export const daysResetHabit = (habitId) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(
      `${apiUrl}/habits/${habitId}/consecutiveDays`
    );
    // console.log(response.data);
    dispatch(daysResetToZeroOnHabit(response.data.habit));
  };
};

export const deleteMyHabit = (habitId) => {
  return async (dispatch, getState) => {
    const response = await axios.delete(`${apiUrl}/habits/${habitId}`);
    // console.log("Habit deleted?", response.data);
    dispatch(habitDeleteSuccess(habitId));
  };
};

export const postMyNewHabit = (name) => {
  return async (dispatch, getState) => {
    // const { token, space } = selectUser(getState());

    // console.log(space);
    // dispatch(appLoading());

    // if (space === null) {
    //   console.log("This space does not exist");
    // }

    const response = await axios.post(
      `${apiUrl}/habits/habit`,
      { name }
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    // dispatch(
    //   showMessageWithTimeout("success", false, response.data.message, 3000)
    // );
    // console.log("Yep!", response);
    console.log("Yep!", response.data);
    dispatch(habitPostSuccess(response.data.newHabit));
    // dispatch(appDoneLoading());
  };
};
