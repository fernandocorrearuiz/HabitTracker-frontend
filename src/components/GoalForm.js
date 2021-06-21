import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postMyNewGoal } from "../store/goals/actions";

const GoalForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredObjective, setEnteredObjective] = useState("");
  const [enteredCurrentLevel, setEnteredCurrentLevel] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const objectiveChangeHandler = (event) => {
    setEnteredObjective(event.target.value);
  };

  const currentLevelChangeHandler = (event) => {
    setEnteredCurrentLevel(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle === "Select a new goal..." ||
      !enteredTitle ||
      !enteredObjective ||
      !enteredCurrentLevel
    ) {
      return null;
    }

    dispatch(
      postMyNewGoal(enteredTitle, enteredObjective, enteredCurrentLevel)
    );

    props.onGoalPosted();
    setEnteredTitle("");
    setEnteredObjective("");
    setEnteredCurrentLevel("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select value={enteredTitle} onChange={titleChangeHandler}>
          <option defaultValue>Select a new goal...</option>
          <option value="Learn a new language">Learn a new language</option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Lose Body Fat %">Lose Body Fat %</option>
          <option value="Obtain an education certification">
            Obtain an education certification
          </option>
          <option value="Develop my personal project">
            Develop my personal project
          </option>
        </select>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </form>
      {/* <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        <label>Objective:</label>
        <input
          type="text"
          value={enteredObjective}
          onChange={objectiveChangeHandler}
        />
        <label>Current Level:</label>
        <input
          type="text"
          value={enteredCurrentLevel}
          onChange={currentLevelChangeHandler}
        />
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </form> */}
    </div>
  );
};

export default GoalForm;
