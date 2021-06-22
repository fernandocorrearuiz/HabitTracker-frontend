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
        backgroundImage: `url("https://get.pxhere.com/photo/food-balance-rest-stack-chocolate-baking-cookie-close-macaroon-dessert-zen-motivation-stones-relaxation-meditation-icing-still-sweetness-baked-goods-flavor-stone-pile-snack-food-cookies-and-crackers-645898.jpg")`,
      }}
    >
      <Jumbotron>
        <h1>My Goals</h1>
      </Jumbotron>
      <Container>
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
        <Container>
          {goals
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((goal) => {
              return (
                <Breadcrumb>
                  <Goal
                    key={goal.id}
                    id={goal.id}
                    title={goal.title}
                    objective={goal.objective}
                    currentLevel={goal.currentLevel}
                  />
                </Breadcrumb>
              );
            })}
        </Container>
      </Container>
    </div>
  );
};

export default MyGoals;
