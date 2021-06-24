/* eslint-disable default-case */
import React, { useState } from "react";
import { Button, Container, ProgressBar } from "react-bootstrap";
import { useDispatch } from "react-redux";

import GoalEdit from "./GoalEdit";
import { deleteMyGoal } from "../store/goals/actions";

export default function Goal(props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const goalDeleteHandler = () => {
    dispatch(deleteMyGoal(props.id));
  };

  const goalUpdateStartHandler = () => {
    setIsEditing(true);
  };

  const goalUpdateStopHandler = () => {
    setIsEditing(false);
  };

  let toRender;
  switch (props.title) {
    case "Learn a new language":
      toRender = 2;
      break;

    case "Lose Weight":
      toRender = 3;
      break;

    case "Lose Body Fat %":
      toRender = 3;
      break;

    case "Obtain an education skill":
      toRender = 5;
      break;

    case "Develop my personal project":
      toRender = 1;
      break;
  }

  const now = 100;
  const message = `You should practice at least ${toRender} times per week to reach your objective`;

  return (
    <div>
      <Container>
        <p>Goal: {props.title}</p>
        <p>Objective: {props.objective}</p>
        <p>Current Level: {props.currentLevel}</p>
        <p>
          <Button onClick={goalDeleteHandler}>Delete goal</Button>
          {"  "}
          {!isEditing && (
            <Button onClick={goalUpdateStartHandler}>Edit my goal</Button>
          )}
          {isEditing && (
            <GoalEdit
              id={props.id}
              title={props.title}
              onCancel={goalUpdateStopHandler}
              onGoalUpdated={goalUpdateStopHandler}
            />
          )}
        </p>
        <ProgressBar variant="success" now={now} label={`${message}`} />
      </Container>
    </div>
  );
}
