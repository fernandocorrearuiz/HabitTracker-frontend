/* eslint-disable default-case */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";

import LearnLanguage from "./LearnLanguage";
import LoseWeight from "./LoseWeight";
import LoseBodyFat from "./LoseBodyFat";
import ObtainEducation from "./ObtainEducation";
import DevelopProject from "./DevelopProject";

import { updateMyGoal } from "../store/goals/actions";

const GoalEdit = (props) => {
  const [enteredObjective, setEnteredObjective] = useState("");
  const [enteredCurrentLevel, setEnteredCurrentLevel] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("updateee");

    if (
      enteredObjective === "Select your objective" ||
      enteredCurrentLevel === "Select your current level"
    ) {
      return null;
    }

    dispatch(updateMyGoal(props.id, enteredCurrentLevel, enteredObjective));
  };

  let toRender;
  switch (props.title) {
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
      {toRender}

      <Button type="button" onClick={props.onCancel}>
        Cancel
      </Button>
      <Button
        type="submit"
        onClick={(event) => {
          props.onGoalUpdated();
          submitHandler(event);
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default GoalEdit;
