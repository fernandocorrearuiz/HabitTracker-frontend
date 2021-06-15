import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_HABITS_SUCCESS = "FETCH_HABITS_SUCCESS";
export const CONSECUTIVE_DAYS_UPDATED = "CONSECUTIVE_DAYS_UPDATED";
export const CONSECUTIVE_DAYS_RESET_TO_ZERO = "CONSECUTIVE_DAYS_RESET_TO_ZERO";

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

export const fetchHabits = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/habits`);
      console.log(response.data);
      dispatch(fetchHabitsSuccess(response.data.habits));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const dayAddHabit = (habitId) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/habits/${habitId}`);
    console.log(response.data);
    dispatch(dayAddedOnHabit(response.data.habit));
    // dispatch(fetchHabits());
  };
};

export const daysResetHabit = (habitId) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(
      `${apiUrl}/habits/${habitId}/consecutiveDays`
    );
    console.log(response.data);
    dispatch(daysResetToZeroOnHabit(response.data.habit));
  };
};
