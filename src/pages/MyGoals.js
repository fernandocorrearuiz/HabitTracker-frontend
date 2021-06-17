import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import { Jumbotron } from "react-bootstrap";

import Goal from "../components/Goal";
import GoalForm from "../components/GoalForm";
import { fetchGoals } from "../store/goals/actions";
import { selectGoals } from "../store/goals/selectors";

const MyGoals = () => {
  const [isPosting, setIsPosting] = useState(false);
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const goalPostingStartHandler = () => {
    setIsPosting(true);
  };

  const goalPostingStopHandler = () => {
    setIsPosting(false);
  };

  return (
    <div>
      <Jumbotron>
        <h1>My Goals</h1>
      </Jumbotron>
      <h1>Here you can find your goals!</h1>
      <p>
        {!isPosting && (
          <Button onClick={goalPostingStartHandler}>Create a new Goal</Button>
        )}
        {isPosting && (
          <GoalForm
            onCancel={goalPostingStopHandler}
            onGoalPosted={goalPostingStopHandler}
          />
        )}
      </p>
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
