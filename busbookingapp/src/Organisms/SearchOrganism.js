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

const useStyles = makeStyles(theme => ({
    formWrapperOuter: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    formControl: {
        minWidth: '25vw',
        textAlign: 'left',
        marginBottom: '20px',
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom:'0px'
    },
    headerLine: {
        width: '10%',
        height: '3px',
        backgroundColor: 'black',
        marginTop: '-10px'
    },
    searchButton: {
        marginTop: '30px',
        cursor: 'pointer'
    },
    datechecker: {
    },
    searchResultsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '50px',
        marginBottom: '50px'
    },
    resultCards: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));


export default function SearchOrganism(props) {
    const classes = useStyles();

    return (
        <div>
            <h1 style={{marginBottom: '2%'}}>Explore Your Trips</h1>
            <hr className={classes.headerLine}/>
            <br/>
            <div className={classes.formWrapperOuter}>
                <div className={classes.formWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">From</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={props.source}
                          onChange={props.handleChangeSource}
                        >
                        {props.cities.map(item => (
                            <MenuItem value={item}>{props.capitalize(item)}</MenuItem>
                        ))}
                        {/*<MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
                        <MenuItem value={"bhopal"}>Bhopal</MenuItem>
                        <MenuItem value={"raipur"}>Raipur</MenuItem>*/}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">To</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={props.destination}
                          onChange={props.handleChangeDestination}
                        >
                        {props.cities.map(item => (
                            (item != props.source)?
                            <MenuItem value={item}>{props.capitalize(item)}</MenuItem>:null
                        ))}
                        {/*<MenuItem value={"mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"lucknow"}>Lucknow</MenuItem>
                        <MenuItem value={"patna"}>Patna</MenuItem>*/}
                        </Select>
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Journey Date</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={props.selectedDate}
                          onChange={props.handleDateChange}
                        >
                          <MenuItem value={"2019-12-30"}>2019-12-30</MenuItem>
                          <MenuItem value={"2020-01-02"}>2020-01-02</MenuItem>
                          <MenuItem value={"2020-02-15"}>2020-02-15</MenuItem>
                        </Select>
                    </FormControl>

                    <Button type="submit" variant="contained" color="secondary" className={classes.searchButton} onClick={props.handleSubmit}>
                        Search
                    </Button>
                </div>            
            </div>
        </div>
    );
}
