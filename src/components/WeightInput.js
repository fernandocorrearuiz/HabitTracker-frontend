import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Breadcrumb, Card, Container, Form } from "react-bootstrap";

import { selectLatestWeight } from "../store/weights/selectors";
import { postMyNewWeight } from "../store/weights/actions";

import GraphLine from "./GraphLine";

const WeightInput = (props) => {
  const latestWeight = useSelector(selectLatestWeight);
  // console.log("latestWeight", latestWeight);

  const [enteredKg, setEnteredKg] = useState("");

  const dispatch = useDispatch();

  const KgChangeHandler = (event) => {
    setEnteredKg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postMyNewWeight(enteredKg));
    setEnteredKg("");
  };

  return (
    <div>
      <Container>
        <GraphLine
          date1={props.date1}
          date2={props.date2}
          date3={props.date3}
          date4={props.date4}
          weight1={props.weight1}
          weight2={props.weight2}
          weight3={props.weight3}
          weight4={props.weight4}
        />
        <Card>
          <Breadcrumb>
            {!latestWeight ? (
              "loading"
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Label>Register your weight:</Form.Label>
                <Form.Control
                  type="number"
                  value={latestWeight.Kg}
                  step={0.1}
                  min={45.1}
                  max={300}
                  onChange={KgChangeHandler}
                />
                <Button type="submit">Register</Button>
              </Form>
            )}
          </Breadcrumb>
        </Card>
      </Container>
    </div>
  );
};

export default WeightInput;
