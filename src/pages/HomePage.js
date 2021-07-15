/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { Card, Container, Button, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.mandarinstone.com/app/uploads/2018/03/Fusion-Light-Grey-Matt-Porcelain-1a-1400x1400.jpg")`,
      }}
    >
      <Container>
        <Row>
          <Card style={{ width: "23rem" }}>
            <Card.Img
              variant="top"
              src="https://onlineprostate.physio/wp-content/uploads/2020/03/Habits.jpg"
              alt="Card MyHabits and MyGoals"
            />
            <Card.Body className="bg-info">
              <Card.Title>My Goals and Habits</Card.Title>
              <Card.Text>
                Here you can keep track of your new Goals and Habits, which will
                help you to develop yourself.
              </Card.Text>
              <Card.Text>
                Set up a new Goal for the future and make it real in combination
                with a new Habit!
              </Card.Text>
              <Button
                href="https://the-habit-tracker.netlify.app/my-goals"
                variant="primary"
              >
                Manage my Goals
              </Button>
              {"  "}
              <Button
                href="https://the-habit-tracker.netlify.app/my-habits"
                variant="primary"
              >
                Manage my Habits
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "23rem" }}>
            <Card.Img
              variant="top"
              src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/Adult_Health_Weight-loss-tips-for-ADHD-adults_Article_5700_help-weight-scale_493537392-3.jpg?resize=1280%2C720px&ssl=1"
              alt="Card MyWeight"
            />
            <Card.Body className="bg-info">
              <Card.Title>My Weight</Card.Title>
              <Card.Text>
                Use our Weight Control to keep track of your weight. Mens sana
                in corpore sano!
              </Card.Text>
              <Button
                href="https://the-habit-tracker.netlify.app/my-weight"
                variant="primary"
              >
                Weight Control
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://freshhh.nl/app/uploads/2020/01/dane-wetton-lBpmXaNQOCM-unsplash-1.jpg"
              alt="Card Yoga"
            />
            <Card.Body className="bg-info">
              <Card.Title>Yoga Sessions</Card.Title>
              <Card.Text>
                Yoga is highly recommended for distressing people from a
                stressfull lifestyle. Start now to be more enlighted!
              </Card.Text>
              <Button
                href="https://the-habit-tracker.netlify.app/yoga"
                variant="primary"
              >
                New Session
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
