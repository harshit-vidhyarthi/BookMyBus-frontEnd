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
import SearchCard from '../Molecules/SearchCard'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: '25vw',
        textAlign: 'left',
        marginBottom: '20px',
    },
    headerLine: {
        width: '10%',
        height: '3px',
        backgroundColor: 'black',
        marginTop: '-10px'
    }
}));


export default function SearchResultsHeaderAndFilter(props) {
    const classes = useStyles();

    return (
        <div>
            <h1 style={{marginBottom: '25px'}}>Available Options</h1>
            <hr style={{width: "140px"}} className={classes.headerLine}/>
            <FormControl style={{minWidth: '20px', width: '200px', margin: '20px'}} className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.sortby}
                    onChange={props.handleChangeSortBy}
                >
                <MenuItem value={"rating"}>Rating</MenuItem>
                <MenuItem value={"seats"}>Available Seats</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
