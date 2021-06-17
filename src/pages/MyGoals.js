import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import { Jumbotron } from "react-bootstrap";

import Goal from "../components/Goal";
import { fetchGoals } from "../store/goals/actions";
import { selectGoals } from "../store/goals/selectors";

const MyGoals = () => {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>My Goals</h1>
      </Jumbotron>
      <h1>Here you can find your goals!</h1>
      {goals
        .sort((a, b) => {
          return a.id - b.id;
        })
        .map((goal) => {
          return (
            <Goal
              key={goal.id}
              id={goal.id}
              title={goal.title}
              objective={goal.objective}
              currentLevel={goal.currentLevel}
            />
          );
        })}
    </div>
  );
};

export default MyGoals;
