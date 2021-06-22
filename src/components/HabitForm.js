import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Form } from "react-bootstrap";

import { postMyNewHabit } from "../store/habits/actions";

const HabitForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName === "Select a new habit..." || !enteredName) {
      return null;
    }

    dispatch(postMyNewHabit(enteredName));

    props.onHabitPosted();
    setEnteredName("");
  };

  console.log(enteredName);

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <select value={enteredName} onChange={nameChangeHandler}>
          <option defaultValue>Select a new habit...</option>
          <option value="Yoga">Yoga</option>
          <option value="Running/Biking">Running/Biking</option>
          <option value="Go to the Gym">Go to the Gym</option>
          <option value="Play a specific sport">Play a specific sport</option>
          <option value="Drink 2L of water">Drink 2L of water</option>
          <option value="Eat healthy">Eat healthy</option>
          <option value="Study">Study</option>
          <option value="Play an instrument">Play an instrument</option>
          <option value="Work on my personal project">
            Work on my personal project
          </option>
        </select>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
};

export default HabitForm;
