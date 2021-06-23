import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
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
      </Container>
    </div>
  );
}
