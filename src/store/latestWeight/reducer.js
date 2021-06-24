/* eslint-disable import/no-anonymous-default-export */

import { FETCH_LATEST_WEIGHT_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_WEIGHT_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};
