import React from "react";
import { Breadcrumb } from "react-bootstrap";

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
