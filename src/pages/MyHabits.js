import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

import Habit from "../components/Habit";
import { fetchHabits } from "../store/habits/actions";
import { selectHabits } from "../store/habits/selectors";

const MyHabits = () => {
  const dispatch = useDispatch();
  const habits = useSelector(selectHabits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>My Habits</h1>
      </Jumbotron>
      <h1>Here you can find your habits!</h1>
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
