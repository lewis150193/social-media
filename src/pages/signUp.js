import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import env from "../images/env.png";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {signUp} from '../redux/actions/userActions'
import { connect } from 'react-redux';

const styles = {
  button: {
    margin: 1
  },
  input: {
    display: "none"
  },
  form: {
    textAlign: "center"
  },
  pageTitle: {},
  img: {
    paddingTop: 30
  },
  signUp: {
    cursor: "pointer",
    onHover: "blue"
  }
};

const SignUp = props => {
  const { classes } = props;
  const [input, changeInput] = useState({
    email: "",
    password: "",
    handler: "",
    confirmPassword: "",
    loading: false,
    errors: {}
  });

  const onChange = data => e => {
    changeInput({ ...input, [data]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
      props.signUpAction(
        {
          handler: input.handler,
          email: input.email,
          confirmPassword: input.confirmPassword,
          password: input.password
        },props.history)
      };

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm={4}>
        <img
          src={env}
          style={{ width: 25, height: 25 }}
          alt="env"
          className={classes.img}
        />
        <Typography variant="h3" className={classes.pageTitle}>
          Sign up
        </Typography>
        <form
          className={classes.container}
          onSubmit={e => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="handler"
            type="text"
            label="User Name"
            className={classes.textField}
            value={input.handler}
            onChange={onChange("handler")}
            margin="normal"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={input.email}
            onChange={onChange("email")}
            margin="normal"
            fullWidth
            helperText={input.errors.email}
            error={!!input.errors.email}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            className={classes.textField}
            value={input.password}
            onChange={onChange("password")}
            margin="normal"
            fullWidth
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            className={classes.textField}
            value={input.confirmPassword}
            onChange={onChange("confirmPassword")}
            margin="normal"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            href={null}
          >
            Sign up
          </Button>
        </form>
        <Typography
          className={classes.signUp}
          variant="caption"
          onClick={() => props.history.push("/signup")}
        >
          Dont have a account? Sign up!
        </Typography>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

const mapStateToProps = state => ({
  UI: state.ui,
  user: state.user
})

const mapDispatchToProps = {
  signUpAction: signUp
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignUp));
