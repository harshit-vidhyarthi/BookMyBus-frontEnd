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
import LoginForm from '../Molecules/LoginForm';
import {
	Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: '50px 30px 50px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: '95%',
    borderRadius: '30em/5em'
  }
}));

function LoginFormComplete() {

  const classes = useStyles();

  return (
    <div className={classes.paper}>
        <LockAvatar formName="Log In"/>
        <LoginForm/>
    </div>
  );
}

export default withRouter(LoginFormComplete);