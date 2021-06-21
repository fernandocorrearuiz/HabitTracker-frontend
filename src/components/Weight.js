import React from "react";
import {
  Alert,
  Button,
  Breadcrumb,
  Card,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Weight(props) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Kg: {props.Kg}</Breadcrumb.Item>
        <Breadcrumb.Item>Date: {props.date}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
