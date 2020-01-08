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
import SearchResultsHeaderAndFilter from '../Molecules/SearchResultsHeaderAndFilter'
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


export default function SearchResultsOrganism(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.searchResultsWrapper}>
                <div className={classes.resultCards}>
                    {(props.results.length==0)?
                    <div></div>:
                    <div>
                        <SearchResultsHeaderAndFilter
                            sortby={props.sortby}
                            handleChangeSortBy={props.handleChangeSortBy}
                        />
                        <SearchResults sortby={props.sortby} results={props.results}/>
                    </div>}
                </div>
            </div>
        </div>
    );
}


const SearchResults = (props) => {
    var arr=props.results                                           
    if(props.sortby=="seats") {
        arr.sort(function(a,b){
            return (a.availableSeats<b.availableSeats)?-1:1
        })
    }
    else {
        arr.sort(function(a,b){
            var x= a.rating.substr(0, a.rating.indexOf('/'));
            var y= b.rating.substr(0, b.rating.indexOf('/'));
            return (x<y)?-1:1
        })
    }
    return (
        arr.map(item => (
        <SearchCard 
            start={item.startDate.substring(0,10)}
            end={item.endDate.substring(0,10)}
            price={item.distance.substring(0,3)}
            seats={item.availableSeats}
            company={item.travelCompany}
            rating={item.rating}
        />))
    )
}