import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Alert,
  Button,
  Breadcrumb,
  Card,
  Container,
  Form,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";

// import { selectLatestWeight } from "../store/weights/selectors";
import { postMyNewWeight } from "../store/weights/actions";

const WeightInput = (props) => {
  // const latestWeight = useSelector(selectLatestWeight);
  // console.log(latestWeight);
  const [enteredKg, setEnteredKg] = useState(80);

  const dispatch = useDispatch();

  const KgChangeHandler = (event) => {
    setEnteredKg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postMyNewWeight(enteredKg));
    setEnteredKg(80);
  };

  return (
    <div>
      <Container>
        <Card>
          <Breadcrumb>
            <Form onSubmit={submitHandler}>
              <Form.Label>Register your weight:</Form.Label>
              <Form.Control
                type="number"
                value={enteredKg}
                step={0.1}
                min={45.1}
                max={300}
                onChange={KgChangeHandler}
              />
              <Button type="submit">Register</Button>
            </Form>
          </Breadcrumb>
        </Card>
      </Container>
    </div>
  );
};

export default WeightInput;
