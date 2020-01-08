import React, { useState } from 'react';
import * as api from "../api";
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Molecules/Copyright';
import {
	Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    formwrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    form: {
        width: '90%',
        marginTop: '10px',
    },
    submit: {
        marginTop: '30px',
        marginBottom: '15px'
    },
    error: {
        color: 'red'
    }
}));

function LoginForm(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [signinError, setsigninError] = useState("");

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if(name=='username')
      setusername(value);
    if(name=='password')
      setpassword(value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    if (username && password) {
      try {
        const payload = { username: username, password: password };
        const { data } = await api.userLogin(payload);
        api.saveIsLogged(true);
        props.history.push("/");
      } catch (error) {
        console.log(error);
        setsigninError("Either username or password is incorrect...");
      }
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.formwrapper}>
        <p className={classes.error}>{signinError}</p>
        <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="username"
                        autoComplete="email"
                        value={username}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
            >
                Log In
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link to="/Signup" className={classes.link}>
                        Do not have an account? Sign up
                    </Link>
                </Grid>
            </Grid>
        </form>
    </div>
  );
}

export default withRouter(LoginForm);