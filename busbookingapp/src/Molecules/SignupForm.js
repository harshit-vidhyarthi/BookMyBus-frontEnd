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
import LockAvatar from '../Molecules/LockAvatar';
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

function SignupForm(props) {
  const [username, setusername] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [password, setpassword] = useState("");
  const [signupError, setsignupError] = useState("");

  const { history } = props;

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if(name=='username')
      setusername(value);
    if(name=='fname')
      setfname(value);
    if(name=='lname')
      setlname(value);
    if(name=='password')
      setpassword(value);
  };

  const handleFormSubmit = async event => {

    if (username && password && fname && lname) {
      const payload = { fname: fname, lname: lname, username: username, password: password };
      try {
        await api.userSignup(payload);
        history.push("/");
      } catch (error) {
        console.log(error.response);
        setsignupError(error.toString());
      }
    }
  };


  const classes = useStyles();

  return (
    <div className={classes.formwrapper}>
        <p className={classes.error}>{signupError}</p>
        <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                value={lname}
                onChange={handleInputChange}
              />
            </Grid>
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <Link to="/Login" className={classes.link}>
                    Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
    </div>
  );
}

export default withRouter(SignupForm);