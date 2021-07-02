import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Breadcrumb, Container, Jumbotron } from "react-bootstrap";

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
    <div
      style={{
        backgroundImage: `url("https://www.mandarinstone.com/app/uploads/2018/03/Fusion-Light-Grey-Matt-Porcelain-1a-1400x1400.jpg")`,
      }}
    >
      <Jumbotron>
        <h1>My Goals</h1>
        <div>
          {!isPosting && (
            <Button onClick={goalPostingStartHandler}>Create a new Goal</Button>
          )}
          {isPosting && (
            <GoalForm
              onCancel={goalPostingStopHandler}
              onGoalPosted={goalPostingStopHandler}
            />
          )}
        </div>
      </Jumbotron>

      <Container>
        {goals
          .sort((a, b) => {
            return a.id - b.id;
          })
          .map((goal) => {
            return (
              <Breadcrumb key={goal.id}>
                <Goal
                  id={goal.id}
                  title={goal.title}
                  objective={goal.objective}
                  currentLevel={goal.currentLevel}
                />
              </Breadcrumb>
            );
          })}
      </Container>
    </div>
  );
};

export default MyGoals;
