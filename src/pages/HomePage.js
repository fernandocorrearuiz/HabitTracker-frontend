import React from "react";

import { Card, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://previews.123rf.com/images/foreverrich/foreverrich1806/foreverrich180600156/103607842-white-and-blue-soft-color-concrete-texture-background.jpg")`,
      }}
    >
      <Container>
        <Card>
          <h1>Welcome to Habit Tracker</h1>

          <Row>
            <Col>
              <img
                src={
                  "https://miro.medium.com/max/1620/1*BbMM9gvda2ez3JddRQCDcw.jpeg"
                }
                alt={"main-pic"}
              />
            </Col>
            <Col>
              <Container>
                <h4>
                  We will help you to develop yourself and achieve your dreams
                  through our available features. Begin the day with a Yoga
                  session, set up a new goal for the future and keep track of
                  your achievements. Let's get started!
                </h4>
              </Container>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://onlineprostate.physio/wp-content/uploads/2020/03/Habits.jpg"
                  alt="Card MyHabits"
                />
                <div class="card-body">
                  <h5 class="card-title">My Habits</h5>
                  <p class="card-text">
                    Here you can keep track of your new habits, which will help
                    you develop yourself.
                  </p>
                  <a
                    href="http://localhost:3000/my-habits"
                    class="btn btn-primary"
                  >
                    Manage my Habits
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/Adult_Health_Weight-loss-tips-for-ADHD-adults_Article_5700_help-weight-scale_493537392-3.jpg?resize=1280%2C720px&ssl=1"
                  alt="Card MyWeight"
                />
                <div class="card-body">
                  <h5 class="card-title">My Weight</h5>
                  <p class="card-text">
                    Use our Weight Control to keep track of your weight. Mens
                    sana in corpore sano!
                  </p>
                  <a
                    href="http://localhost:3000/my-weight"
                    class="btn btn-primary"
                  >
                    Weight Control
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://freshhh.nl/app/uploads/2020/01/dane-wetton-lBpmXaNQOCM-unsplash-1.jpg"
                  alt="Card Yoga"
                />
                <div class="card-body">
                  <h5 class="card-title">Yoga Sessions</h5>
                  <p class="card-text">
                    Yoga is highly recommended for distressing people from a
                    stressfull lifestyle. Start now to be more enlighted!
                  </p>
                  <a href="http://localhost:3000/yoga" class="btn btn-primary">
                    New Session
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://www.indoindians.com/wp-content/uploads/2020/03/smart-goals-copy.jpg"
                  alt="Card MyGoals"
                />
                <div class="card-body">
                  <h5 class="card-title">My Goals</h5>
                  <p class="card-text">
                    Here you can keep track of your new goals, which will help
                    you grow as a person and professional.
                  </p>
                  <a
                    href="http://localhost:3000/my-goals"
                    class="btn btn-primary"
                  >
                    Manage my Goals
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
