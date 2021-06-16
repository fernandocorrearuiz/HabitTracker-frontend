import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postMyNewWeight } from "../store/weights/actions";

const WeightInput = (props) => {
  const [enteredKg, setEnteredKg] = useState("");

  const dispatch = useDispatch();

  const KgChangeHandler = (event) => {
    setEnteredKg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postMyNewWeight(enteredKg));
    setEnteredKg("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Register your weight:</label>
        <input
          type="number"
          value={enteredKg}
          step={0.1}
          min={45.1}
          max={300}
          onChange={KgChangeHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default WeightInput;
