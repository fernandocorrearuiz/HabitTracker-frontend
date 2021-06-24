import React from "react";
import { Alert, Button, Breadcrumb, Container } from "react-bootstrap";
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
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Button onClick={habitDeleteHandler}>Delete habit</Button>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant="primary">
          Consecutive Days: {props.consecutiveDays}
        </Alert>

        <img
          src={
            "https://www.pointloma.edu/sites/default/files/styles/basic_page/public/images/Fall2015_Habit-MakingHabit-Breaking.jpg?itok=RyEQ9yif"
          }
          alt={"main-pic"}
          width={"50%"}
        />

        <Breadcrumb>
          <Alert variant="primary">Did you comply with your Habit today?</Alert>
        </Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Button onClick={dayAddHandler}>Yes</Button>
            {"   "}
            <Button onClick={dayAddHandler}>Cheat Day</Button>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Button onClick={dayResetHandler}>No</Button>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
}
