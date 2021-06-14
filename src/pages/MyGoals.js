import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const MyGoals = () => {
  return (
    <div>
      <Jumbotron>
        <h1>My Goals</h1>
      </Jumbotron>
      <h1>Here you can find your goals!</h1>
    </div>
  );
};

export default MyGoals;
