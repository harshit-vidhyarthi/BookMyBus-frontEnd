import { withRouter } from "react-router-dom";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatarwrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: '#555',
        marginBottom: '15px'
    }
}));

function LockAvatar(props) {

  const classes = useStyles();

  return (
    <div className={classes.avatarwrapper}>
        <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            {props.formName}
        </Typography>
    </div>
  );
}

export default LockAvatar;