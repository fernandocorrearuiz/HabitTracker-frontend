import { apiUrl } from "../../config/constants";
import axios from "axios";

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
      // const offset = getState().weights.length;
      // console.log(offset);
      // const offset = 2;
      // const response = await axios.get(
      //   `${apiUrl}/weights?offset=${offset}&limit=5`
      // );
      // const response = await axios.get(`${apiUrl}/weights?offset=0&limit=5`);
      const response = await axios.get(`${apiUrl}/weights`);
      // console.log(response.data);
      dispatch(fetchWeightsSuccess(response.data.weights));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postMyNewWeight = (newKg) => {
  return async (dispatch, getState) => {
    // const { token, space } = selectUser(getState());

    // console.log(space);
    // dispatch(appLoading());

    // if (space === null) {
    //   console.log("This space does not exist");
    // }

    const response = await axios.post(
      `${apiUrl}/weights/weight`,
      { newKg }
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
    // console.log("Yep!", response.data);
    dispatch(weightPostSuccess(response.data.newWeight));
    // dispatch(appDoneLoading());
  };
};
