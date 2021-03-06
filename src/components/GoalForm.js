/* eslint-disable default-case */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Form } from "react-bootstrap";

import LearnLanguage from "./LearnLanguage";
import LoseWeight from "./LoseWeight";
import LoseBodyFat from "./LoseBodyFat";
import ObtainEducation from "./ObtainEducation";
import DevelopProject from "./DevelopProject";

import { postMyNewGoal } from "../store/goals/actions";

const GoalForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredObjective, setEnteredObjective] = useState("");
  const [enteredCurrentLevel, setEnteredCurrentLevel] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
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

  // console.log(enteredCurrentLevel);
  // console.log(enteredObjective);

  let toRender;
  switch (enteredTitle) {
    case "Learn a new language":
      toRender = (
        <LearnLanguage
          currentLevel={enteredCurrentLevel}
          objective={enteredObjective}
          setCurrentLevel={setEnteredCurrentLevel}
          setObjective={setEnteredObjective}
        />
      );
      break;

    case "Lose Weight":
      toRender = (
        <LoseWeight
          currentLevel={enteredCurrentLevel}
          objective={enteredObjective}
          setCurrentLevel={setEnteredCurrentLevel}
          setObjective={setEnteredObjective}
        />
      );
      break;

    case "Lose Body Fat %":
      toRender = (
        <LoseBodyFat
          currentLevel={enteredCurrentLevel}
          objective={enteredObjective}
          setCurrentLevel={setEnteredCurrentLevel}
          setObjective={setEnteredObjective}
        />
      );
      break;

    case "Obtain an education skill":
      toRender = (
        <ObtainEducation
          currentLevel={enteredCurrentLevel}
          objective={enteredObjective}
          setCurrentLevel={setEnteredCurrentLevel}
          setObjective={setEnteredObjective}
        />
      );
      break;

    case "Develop my personal project":
      toRender = (
        <DevelopProject
          currentLevel={enteredCurrentLevel}
          objective={enteredObjective}
          setCurrentLevel={setEnteredCurrentLevel}
          setObjective={setEnteredObjective}
        />
      );
      break;
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <select value={enteredTitle} onChange={titleChangeHandler}>
          <option defaultValue>Select a new goal...</option>
          <option value="Learn a new language">Learn a new language</option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Lose Body Fat %">Lose Body Fat %</option>
          <option value="Obtain an education skill">
            Obtain an education skill
          </option>
          <option value="Develop my personal project">
            Develop my personal project
          </option>
        </select>

        {toRender}

        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
};

export default GoalForm;
