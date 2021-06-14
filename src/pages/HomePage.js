import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <h1>Here you can find main features!</h1>
    </div>
  );
};

export default HomePage;
