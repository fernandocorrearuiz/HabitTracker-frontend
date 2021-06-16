import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

export default function Weight(props) {
  return (
    <div>
      <p>Weight #: {props.id}</p>
      <p>Kg: {props.Kg}</p>
      <p>Date: {props.date}</p>

      <p>{"---"}</p>
    </div>
  );
}
