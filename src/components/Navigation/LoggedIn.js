import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
// import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* <NavbarItem path="/" linkText="Home" />
      <NavbarItem path="/my-habits" linkText="My Habits" />
      <NavbarItem path="/my-weight" linkText="Weight Control" />
      <NavbarItem path="/yoga" linkText="Yoga" />
      <NavbarItem path="/my-goals" linkText="Goals" /> */}
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Link to="/">
        <Button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Button>
      </Link>
    </>
  );
}
