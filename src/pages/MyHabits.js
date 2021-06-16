import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import { Jumbotron } from "react-bootstrap";

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
    <div>
      <Jumbotron>
        <h1>My Habits</h1>
      </Jumbotron>
      <h1>Here you can find your habits!</h1>
      <p>
        {!isPosting && (
          <Button onClick={habitPostingStartHandler}>Create a new Habit</Button>
        )}
        {isPosting && (
          <HabitForm
            onCancel={habitPostingStopHandler}
            onHabitPosted={habitPostingStopHandler}
          />
        )}
      </p>
      {habits
        .sort((a, b) => {
          return a.id - b.id;
        })
        .map((habit) => {
          return (
            <Habit
              key={habit.id}
              id={habit.id}
              name={habit.name}
              consecutiveDays={habit.consecutiveDays}
            />
          );
        })}
    </div>
  );
};

export default MyHabits;
