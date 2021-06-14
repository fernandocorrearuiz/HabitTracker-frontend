import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const MyWeight = () => {
  return (
    <div>
      <Jumbotron>
        <h1>My Weight</h1>
      </Jumbotron>
      <h1>Here you can find your weight!</h1>
    </div>
  );
};

export default MyWeight;
