import React from 'react';
import 'date-fns';
import * as api from "../api";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useCardStyles = makeStyles(theme => ({
    cardWrapper: {
        width: '80vw',
        minHeight: '100px',
        backgroundImage: 'url("")',
        backgroundPositionY: '70%',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: '0.3s',
        borderRadius: '2%/11%',
        overflow: 'hidden',
        margin: '12.5px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.25)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-7px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.25)',
        }
    },  
    journeyCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px 40px 40px 40px',
    },
    timeDetail: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    busDetail: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        minWidth: '25%'
    },
    busRatingWrapper: {
        padding: '6px',
        color: 'white',
        borderRadius: '7px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(61deg, rgb(67, 225, 168), rgb(33, 147, 147))',
    },
    busDetailBody: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seatDetail: {
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    }
}));

export default function SearchCard(props) {
    const classes = useCardStyles();


    return (
        <div className={classes.cardWrapper}>
            <div className={classes.journeyCard}>
                <div className={classes.timeDetail}>
                    <img src="http://static.abhibus.com/img/edge/track-36.png" width="35px" height="32px"/>
                    <h4>{props.start} → </h4>
                    <h4>{props.end}</h4>
                </div>
                <div className={classes.busDetail}>
                    <div className={classes.busDetailHeader}>
                        <h2>{props.company}</h2>
                    </div>
                    <div className={classes.busDetailBody}>
                        <div className={classes.busRatingWrapper}>
                            <h4 style={{padding: '0', margin: '0', fontWeight: '500'}}>{props.rating}</h4>
                        </div>
                        <h4 style={{padding: '6px', margin: '0'}}>{props.seats}   Seats Left</h4>
                    </div>
                </div>
                <div className={classes.seatDetail}>
                    <div className={classes.priceDetail}>
                        <h2>₹{props.price}</h2>
                    </div>
                    <Button type="submit" variant="contained" color="secondary" className={classes.searchButton}>
                        Select Seats
                    </Button>
                </div>
            </div>
        </div>
    );
}