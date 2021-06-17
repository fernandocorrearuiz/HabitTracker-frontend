import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import { deleteMyGoal } from "../store/goals/actions";

export default function Goal(props) {
  const dispatch = useDispatch();

  const goalDeleteHandler = () => {
    dispatch(deleteMyGoal(props.id));
  };

  return (
    <div>
      <p>Goal #: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Objective: {props.objective}</p>
      <p>Current Level: {props.currentLevel}</p>
      <p>
        <Button onClick={goalDeleteHandler}>Delete goal</Button>
      </p>

      <p>{"---"}</p>
    </div>
  );
}
