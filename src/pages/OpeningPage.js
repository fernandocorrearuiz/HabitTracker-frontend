/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { Card, Container } from "react-bootstrap";

const OpeningPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.mandarinstone.com/app/uploads/2018/03/Fusion-Light-Grey-Matt-Porcelain-1a-1400x1400.jpg")`,
      }}
    >
      <Container>
        <Card className="bg-light ">
          <Card.Header className=" display-3 text-center font-weight-bolder ">
            Welcome to The Habit Tracker
          </Card.Header>
          <Container className=" text-justify font-weight-bolder">
            <Card.Body as="h4" className=" text-justify font-weight-bolder">
              We will help you to develop yourself and achieve your dreams.
              Begin the day with a Yoga session, set up a new goal for the
              future and keep track of your achievements. Let's get started!
            </Card.Body>
          </Container>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="//www.youtube.com/embed/wnHW6o8WMas"
              allowfullscreen
            ></iframe>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default OpeningPage;
