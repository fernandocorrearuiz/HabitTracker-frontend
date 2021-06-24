import { apiUrl } from "../../config/constants";
import axios from "axios";

import { selectUser } from "../user/selectors";

export const FETCH_LATEST_WEIGHT_SUCCESS = "FETCH_LATEST_WEIGHT_SUCCESS";

export const fetchLatestWeightSuccess = (latestWeight) => ({
  type: FETCH_LATEST_WEIGHT_SUCCESS,
  payload: latestWeight,
});

export const fetchLatestWeight = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      const response = await axios.get(`${apiUrl}/weights/latestWeight`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      dispatch(fetchLatestWeightSuccess(response.data.latestWeight));
    } catch (e) {
      console.log(e.message);
    }
  };
};
