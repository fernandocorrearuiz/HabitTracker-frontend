import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

export default function Goal(props) {
  return (
    <div>
      <p>Goal #: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Objective: {props.objective}</p>
      <p>Current Level: {props.currentLevel}</p>

      <p>{"---"}</p>
    </div>
  );
}
