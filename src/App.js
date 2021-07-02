import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import OpeningPage from "./pages/OpeningPage";
import HomePage from "./pages/HomePage";
import MyHabits from "./pages/MyHabits";
import MyWeight from "./pages/MyWeight";
import Yoga from "./pages/Yoga";
import MyGoals from "./pages/MyGoals";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={OpeningPage} />
        <Route exact path="/home" component={HomePage} />
        <Route path="/my-habits" component={MyHabits} />
        <Route path="/my-weight" component={MyWeight} />
        <Route path="/yoga" component={Yoga} />
        <Route path="/my-goals" component={MyGoals} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
