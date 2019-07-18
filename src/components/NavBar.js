import React from "react";
import { withRouter } from "react-router";

//MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const NavBar = props => {
  return (
    <AppBar position="fixed">
      <ToolBar secondary={true} className="nav-container">
        <Button color="inherit" onClick={() => props.history.push("/login")}>
          Login
        </Button>

        <Button color="inherit" onClick={() => props.history.push("/signup")}>
          SignUp
        </Button>
        <Button color="inherit" onClick={() => props.history.push("/")}>
          Home
        </Button>
      </ToolBar>
    </AppBar>
  );
};

export const NavWithRouter = withRouter(NavBar);
