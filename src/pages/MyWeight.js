import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

import { fetchWeights } from "../store/weights/actions";
import { selectWeights } from "../store/weights/selectors";
import Weight from "../components/Weight";
import WeightInput from "../components/WeightInput";

const MyWeight = () => {
  const dispatch = useDispatch();
  const weights = useSelector(selectWeights);

  useEffect(() => {
    dispatch(fetchWeights());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>My Weight</h1>
      </Jumbotron>
      <WeightInput />
      <h1>Here you can find your weight!</h1>
      {weights
        .sort((a, b) => {
          return a.date - b.date;
        })
        .map((weight) => {
          return (
            <Weight
              key={weight.id}
              id={weight.id}
              Kg={weight.Kg}
              date={weight.date}
            />
          );
        })}
    </div>
  );
};

export default MyWeight;
