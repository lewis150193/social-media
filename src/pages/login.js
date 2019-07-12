import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {withStyles} from "@material-ui/core";

const styles = {
    button: {
        margin: 1,
    },
    input: {
        display: 'none',
    },
};

const Login = (props) => {
    const {classes} = props;
    console.log(props);
    const [input, changeInput] = useState({
        email: '',
        password: ''
    });

    const onChange =  data => e => {
        changeInput({...input, [data]: e.target.value})
    };

        return (
            <Grid container>
                <Grid item sm={5} xs={9}>
                </Grid>
                <Grid item>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Email"
                            className={classes.textField}
                            value={input.email}
                            onChange={onChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Password"
                            className={classes.textField}
                            value={input.password}
                            onChange={onChange('password')}
                            margin="normal"
                        />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Login
                    </Button>
                    </form>
                </Grid>
                <Grid item sm={4} xs={5}>
                </Grid>

            </Grid>
        );
    };


export default withStyles(styles)(Login);