import React from "react";
import {
  Alert,
  Button,
  Breadcrumb,
  Card,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteMyGoal } from "../store/goals/actions";

export default function Goal(props) {
  const dispatch = useDispatch();

  const goalDeleteHandler = () => {
    dispatch(deleteMyGoal(props.id));
  };

  return (
    <div>
      <Container>
        <p>{props.title}</p>
        <p>Objective: {props.objective}</p>
        <p>Current Level: {props.currentLevel}</p>
        <p>
          <Button onClick={goalDeleteHandler}>Delete goal</Button>
        </p>
      </Container>
    </div>
  );
}
