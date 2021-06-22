import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

import { selectUser } from "../user/selectors";

export const FETCH_WEIGHTS_SUCCESS = "FETCH_WEIGHTS_SUCCESS";
export const WEIGHT_CREATED_SUCCESS = "WEIGHT_CREATED_SUCCESS";

export const fetchWeightsSuccess = (habits) => ({
  type: FETCH_WEIGHTS_SUCCESS,
  payload: habits,
});

export const weightPostSuccess = (weightToPost) => ({
  type: WEIGHT_CREATED_SUCCESS,
  payload: weightToPost,
});

export const fetchWeights = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      const offset =
        getState().weights.length === (undefined || null)
          ? 0
          : getState().weights.length;
      const limit = 5;
      const response = await axios.get(
        `${apiUrl}/weights?offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      dispatch(fetchWeightsSuccess(response.data.weights));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postMyNewWeight = (newKg) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    dispatch(appLoading());
    const response = await axios.post(
      `${apiUrl}/weights/weight`,
      { newKg },
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
    dispatch(weightPostSuccess(response.data.newWeight));
    dispatch(appDoneLoading());
  };
};
