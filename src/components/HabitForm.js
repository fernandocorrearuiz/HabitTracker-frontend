import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postMyNewHabit } from "../store/habits/actions";

const HabitForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(postMyNewHabit(enteredName));

    props.onHabitPosted();
    setEnteredName("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default HabitForm;
