import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const Yoga = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Yoga</h1>
      </Jumbotron>
      <h1>Here you can find Yoga!</h1>
    </div>
  );
};

export default Yoga;
