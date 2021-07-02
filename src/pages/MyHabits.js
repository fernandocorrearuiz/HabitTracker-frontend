import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Breadcrumb, Container, Row, Jumbotron } from "react-bootstrap";

import Habit from "../components/Habit";
import HabitForm from "../components/HabitForm";
import { fetchHabits } from "../store/habits/actions";
import { selectHabits } from "../store/habits/selectors";

const MyHabits = () => {
  const [isPosting, setIsPosting] = useState(false);
  const dispatch = useDispatch();
  const habits = useSelector(selectHabits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  const habitPostingStartHandler = () => {
    setIsPosting(true);
  };

  const habitPostingStopHandler = () => {
    setIsPosting(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://get.pxhere.com/photo/food-balance-rest-stack-chocolate-baking-cookie-close-macaroon-dessert-zen-motivation-stones-relaxation-meditation-icing-still-sweetness-baked-goods-flavor-stone-pile-snack-food-cookies-and-crackers-645898.jpg")`,
      }}
    >
      <Jumbotron>
        <h1>My Habits</h1>
        <p>
          {!isPosting && (
            <Button onClick={habitPostingStartHandler}>
              Create a new Habit
            </Button>
          )}
          {isPosting && (
            <HabitForm
              onCancel={habitPostingStopHandler}
              onHabitPosted={habitPostingStopHandler}
            />
          )}
        </p>
      </Jumbotron>

      <Container>
        <Row>
          {habits
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((habit) => {
              return (
                <Breadcrumb>
                  <Habit
                    key={habit.id}
                    id={habit.id}
                    name={habit.name}
                    consecutiveDays={habit.consecutiveDays}
                  />
                </Breadcrumb>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default MyHabits;
