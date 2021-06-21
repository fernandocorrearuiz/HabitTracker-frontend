import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    <div
      style={{
        backgroundImage: `url("https://get.pxhere.com/photo/food-balance-rest-stack-chocolate-baking-cookie-close-macaroon-dessert-zen-motivation-stones-relaxation-meditation-icing-still-sweetness-baked-goods-flavor-stone-pile-snack-food-cookies-and-crackers-645898.jpg")`,
      }}
    >
      <Jumbotron>
        <h1>My Weight</h1>
      </Jumbotron>

      <Container>
        <WeightInput />

        <Card>My latest Weight</Card>
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
      </Container>
    </div>
  );
};

export default MyWeight;
