import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import { dayAddHabit } from "../store/habits/actions";
import { daysResetHabit } from "../store/habits/actions";
import { deleteMyHabit } from "../store/habits/actions";

export default function Habit(props) {
  const dispatch = useDispatch();

  const dayAddHandler = () => {
    dispatch(dayAddHabit(props.id));
  };

  const dayResetHandler = () => {
    dispatch(daysResetHabit(props.id));
  };

  const habitDeleteHandler = () => {
    dispatch(deleteMyHabit(props.id));
  };

  return (
    <div>
      <p>Habit #: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Consecutive Days: {props.consecutiveDays}</p>
      <p>Did you comply with your Habit today?</p>
      <p>
        <Button onClick={dayAddHandler}>Yes</Button>
        {"   "}
        <Button onClick={dayAddHandler}>Cheat Day</Button>
      </p>
      <p>
        <Button onClick={dayResetHandler}>No</Button>
      </p>
      <p>
        <Button onClick={habitDeleteHandler}>Delete habit</Button>
      </p>

      <p>{"---"}</p>
    </div>
  );
}
