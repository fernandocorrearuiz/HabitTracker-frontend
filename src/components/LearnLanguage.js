import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

const LearnLanguage = (props) => {
  const [enteredObjective, setEnteredObjective] = useState("");
  const [enteredCurrentLevel, setEnteredCurrentLevel] = useState("");

  const objectiveChangeHandler = (event) => {
    setEnteredObjective(event.target.value);
  };

  const currentLevelChangeHandler = (event) => {
    setEnteredCurrentLevel(event.target.value);
  };

  return (
    <div>
      <select value={props.currentLevel} onChange={currentLevelChangeHandler}>
        <option defaultValue>Select your current level</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
      </select>

      <select value={props.objective} onChange={objectiveChangeHandler}>
        <option defaultValue>Select your objective</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
      </select>
    </div>
  );
};

export default LearnLanguage;
