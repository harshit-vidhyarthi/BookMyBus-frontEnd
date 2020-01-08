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
import LoginForm from '../Molecules/LoginForm';
import LoginFormComplete from '../Organisms/LoginFormComplete';
import {
	Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("https://images7.alphacoders.com/317/thumb-1920-317196.jpg")',
    },
  }
}));

function Login() {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <LoginFormComplete/>
      <Box m={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(Login);