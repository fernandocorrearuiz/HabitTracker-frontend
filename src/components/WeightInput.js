import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { selectLatestWeight } from "../store/weights/selectors";
import { postMyNewWeight } from "../store/weights/actions";

const WeightInput = (props) => {
  // const latestWeight = useSelector(selectLatestWeight);
  // console.log(latestWeight);
  const [enteredKg, setEnteredKg] = useState(80);

  const dispatch = useDispatch();

  const KgChangeHandler = (event) => {
    setEnteredKg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postMyNewWeight(enteredKg));
    setEnteredKg(80);
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
