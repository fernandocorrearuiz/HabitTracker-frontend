import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Container, Jumbotron } from "react-bootstrap";

import { fetchWeights } from "../store/weights/actions";
import { selectWeights } from "../store/weights/selectors";
import Weight from "../components/Weight";
import WeightInput from "../components/WeightInput";

const MyWeight = () => {
  const dispatch = useDispatch();
  const weights = useSelector(selectWeights);

  const formatDate = (date) => {
    let formattedDate = date.split("T")[0];
    return formattedDate;
  };

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
        <WeightInput
          date1={weights[0]?.date}
          date2={weights[1]?.date}
          date3={weights[2]?.date}
          date4={weights[3]?.date}
          weight1={weights[0]?.Kg}
          weight2={weights[1]?.Kg}
          weight3={weights[2]?.Kg}
          weight4={weights[3]?.Kg}
        />
      </Jumbotron>

      <Container>
        <Card>
          <h1>My latest Weight</h1>
        </Card>

        {weights.map((weight) => {
          return (
            <Weight
              key={weight.id}
              id={weight.id}
              Kg={weight.Kg}
              date={formatDate(weight.date)}
            />
          );
        })}
        <Button onClick={() => dispatch(fetchWeights())}>See Previous</Button>
      </Container>
    </div>
  );
};

export default MyWeight;
