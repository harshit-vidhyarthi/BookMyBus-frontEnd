import React, { useState } from 'react'
import * as api from "../api";
import { removeToken } from "../tokenUtils";
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
	Link
} from "react-router-dom";
import { lineHeight } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    navBarWrapper: {
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://justpaste.it/img/c0d4e66c5aab763e36148d925cfafecb.jpg")',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        boxShadow: 'none',
        clipPath: 'polygon(100% 0, 100% 80%, 0% 100%, 0 0)',
        textShadow: '5px 5px 5px #111'
    },
    navBarToolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navButton: {
        marginLeft: '1.5em'
    },
    navTitle: {
        textAlign: 'left',
        marginLeft: '10vw',
        marginTop: '5vw'
    },
    navlogo: {
        marginTop: '4vh'
    },
    navh2: {
        letterSpacing: '0.1em',
        fontFamily: 'Pacifico'
    },
    navh6: {
        fontSize: '1.1em',
        paddingRight: '10%',
        marginTop: '4vw',
        textAlign: 'justify',
        fontWeight: '400',
        letterSpacing: '0.1em',
        lineHeight: '1.8em'
    },
    discover: {
        width: '15%',
        marginTop: '4vw',
        color: 'darkred',
        fontWeight: '600'
    },
    link: {
        textDecoration: 'none',
        color: 'darkred',
        '&:hover &:focus &:visited &:link &:active': {
            textDecoration: 'none',
            color: 'darkred',
        }
    }
}));

const NavBar = (props) => {
    const classes = useStyles();

    const handleclick = async event => {
        await api.userLogout();
        props.history.push("/");
    };

    let buttons;
    if(!api.isAuthed()) {
        buttons = <div><Link to="/Login" className={classes.link}>
                        <Button type="submit" variant="contained" color="default" className={classes.navButton}>
                            Log In
                        </Button>
                    </Link>
                    <Link to="/SignUp" className={classes.link}>
                        <Button type="submit" variant="contained" color="secondary" className={classes.navButton}>
                            Sign Up
                        </Button>
                    </Link></div>
    }
    else {
        buttons = <div><Link to="/" className={classes.link}>
                        <Button type="submit" onClick={handleclick} variant="contained" color="default" className={classes.navButton}>
                            Log Out
                        </Button>
                    </Link></div>
    }

    return(
        <div style={{filter: 'drop-shadow(2px 2px 10px darkred)'}}>
            <AppBar position="static" className={classes.navBarWrapper}>
                <Toolbar className={classes.navBarToolbar}>
                    <img src="https://justpaste.it/img/44af30b99d5d161222819bedd3ddf074.png" className={classes.navlogo} height='75px' width='auto'/>
                    <div>
                        {buttons}
                    </div>
                </Toolbar>
                <div className={classes.navTitle}>
                    <Typography variant="h3" color="inherit" className={classes.navh2}>
                        Book Your Trips Now !!
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.navh6}>
                    Book My bus is the world's largest online bus ticket booking service trusted by over 8 million people globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes in India.
                    </Typography>
                    <Link to={props.url} className={classes.link}>
                        <Button type="submit" variant="contained" color="default" className={classes.discover}>
                            {props.nextAction}
                        </Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    )
}
export default withRouter(NavBar);