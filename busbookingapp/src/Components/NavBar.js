import React, { useState } from 'react'
import { isAuthed } from "../tokenUtils";
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
        backgroundImage: 'url("https://justpaste.it/img/99f780a49ef64bf4be455ec20e636fde.jpg")',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '95vh',
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
        letterSpacing: '0.1em'
    },
    navh6: {
        fontSize: '1em',
        paddingRight: '10%',
        marginTop: '4vw',
        textAlign: 'justify',
        fontWeight: '500',
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

    const handleclick = () => {
        removeToken();
        props.history.push("/");
    };

    let buttons;
    if(!isAuthed()) {
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
                    <img src={require("../logo.png")} className={classes.navlogo} height='75px' width='75px'/>
                    <div>
                        {buttons}
                    </div>
                </Toolbar>
                <div className={classes.navTitle}>
                    <Typography variant="h3" color="inherit" className={classes.navh2}>
                        MARK YOUR FAVOURITE MOVIES !!
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.navh6}>
                    My Movie Database is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.
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