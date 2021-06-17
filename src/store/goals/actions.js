import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_GOALS_SUCCESS = "FETCH_GOALS_SUCCESS";

export const fetchGoalsSuccess = (goals) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: goals,
});

export const fetchGoals = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/goals`);
      console.log(response.data);
      dispatch(fetchGoalsSuccess(response.data.goals));
    } catch (e) {
      console.log(e.message);
    }
  };
};
