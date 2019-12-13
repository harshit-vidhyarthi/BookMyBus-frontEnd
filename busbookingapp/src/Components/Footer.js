import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import { flexbox } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    FooterWrapper: {
        overflow: 'hidden',
        position: 'relative',
        height: '50vh',
        backgroundImage: 'url("https://s3.rdbuz.com/Images/carousel/Hero_Tweak.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 30%)',
        boxShadow: 'none',
        marginTop: '-125px'
    },
    footermain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        height: '50vh',
        width: '90vw',
        marginLeft: '10vw',
        marginTop: '20vh'
    },
    FooterHeader: {
        width: '17.5vw',
        textAlign: 'left',
        color: 'white',
        fontWeight: '600',
        fontSize: '1em'
    },
    footercolumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
    },
    FooterItem: {
        marginTop: '1.2vh',
        textAlign: 'left'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return(
        <div style={{filter: 'drop-shadow(2px 2px 10px darkred)'}}>
            <AppBar position="static" className={classes.FooterWrapper}>
                <div className={classes.footermain}>
                    <div className={classes.footercolumn}>
                        <Typography variant="h6" color="inherit" className={classes.FooterHeader}>
                            THE BASICS
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Contact Us
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Support forums
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            API
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Blog
                        </Typography>
                    </div>
                    <div className={classes.footercolumn}>
                        <Typography variant="h6" color="inherit" className={classes.FooterHeader}>
                            GET INVOLVED
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            3rd party applications
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Add new Bus
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Add new Route
                        </Typography>
                    </div>
                    <div className={classes.footercolumn}>
                        <Typography variant="h6" color="inherit" className={classes.FooterHeader}>
                            COMMUNITY
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Guidelines
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Leaderboard
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Twitter
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Facebook
                        </Typography>
                    </div>
                    <div className={classes.footercolumn}>
                        <Typography variant="h6" color="inherit" className={classes.FooterHeader}>
                            LEGAL
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Terms of Use
                        </Typography>
                        <Typography variant="title" color="inherit" className={classes.FooterItem}>
                            Privacy Policy
                        </Typography>
                    </div>
                    <img src="https://justpaste.it/img/44af30b99d5d161222819bedd3ddf074.png" className={classes.navlogo} height='75px' width='auto'/>
                </div>
            </AppBar>
        </div>
    )
}
export default Footer;