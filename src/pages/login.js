import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import env from '../images/env.png'
import {withStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import {connect} from "react-redux";
import {LoginUser} from "../redux/actions/userActions";

const styles = {
    button: {
        margin: 1,
    },
    input: {
        display: 'none',
    },
    form: {
        textAlign: 'center'
    },
    pageTitle: {

    },
    img: {
        paddingTop: 30
    },
    signUp: {
        cursor: 'pointer',
        onHover: 'blue'
    }
};

const Login = (props) => {
    const {classes} = props;
    const [input, changeInput] = useState({
        email: '',
        password: '',
        loading: false,
        errors: {}
    });

    const onChange =  data => e => {
        changeInput({...input, [data]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input.email);
        console.log(input.password);
        console.log(input.loading);
        console.log(input.errors);
        const user = {user: input.email, password: input.password}
        props.loginUser(user,props.history)

    };

    console.log(props.UI);
    console.log(props.login)
        return (
            <Grid container className={classes.form}>
                <Grid item sm>
                </Grid>
                <Grid item>
                    <img src={env} style={{width: 25, height: 25}} alt="env" className={classes.img}/>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form  className={classes.container} onClick={e =>handleSubmit(e)} noValidate autoComplete="off">
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            value={input.email}
                            onChange={onChange('email')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            className={classes.textField}
                            value={input.password}
                            onChange={onChange('password')}
                            margin="normal"
                            fullWidth
                        />
                    <Button  type="submit" variant="contained" color="primary" className={classes.button} href={null}>
                        Login
                    </Button>
                    </form>
                    <Typography className={classes.signUp} variant="caption" onClick={() => props.history.push('/signup')} >Dont have a account? Sign up!</Typography>
                </Grid>
                <Grid item sm>
                </Grid>

            </Grid>
        );
    };

const mapStateToProps = (state) => ({
    login: state.user,
    UI: state.ui
})

const mapDispatchToProps = {
    loginUser: LoginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
