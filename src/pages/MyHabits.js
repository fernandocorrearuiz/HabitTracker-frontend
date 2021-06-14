import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const MyHabits = () => {
  return (
    <div>
      <Jumbotron>
        <h1>My Habits</h1>
      </Jumbotron>
      <h1>Here you can find your habits!</h1>
    </div>
  );
};

export default MyHabits;
