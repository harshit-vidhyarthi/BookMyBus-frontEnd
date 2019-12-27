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


export default function Home() {
    const classes = useStyles();
    const [source, setSource] = React.useState('');
    const [destination, setDestination] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState('');
    const [searchError, setSearchError] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [sortby, setSortby] = React.useState('');

    React.useEffect(() => {
        fetchCities()
    }, []);

    const fetchCities = async event => {
        const data = await api.getCityList()
        setCities(() => {
            return (data.data)
        })
    };

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };


    const handleChangeSource = event => {
        setSource(event.target.value);
    };

    const handleChangeDestination = event => {
        setDestination(event.target.value);
    };

    const handleChangeSortBy = event => {
        setSortby(event.target.value);
    };

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (source && destination && selectedDate) {
            try {
                const payload = { source: source, destination: destination, date: selectedDate };
                const { data } = await api.getJourneys(payload);

                var l = (data).length
                var arr = []
                for( var i=0; i<l; i++) {
                    arr.push(data[i])
                }
                setResults(arr)

            } catch (error) {
                console.log(error);
                setSearchError(error.toString());
            }
        }
    };


    /*const SearchResults = () => (
        <div>
            {results.map(item => (
                <Cards 
                    start={item.startDate.substring(0,10)}
                    end={item.endDate.substring(0,10)}
                    price={item.distance}
                    seats={item.availableSeats}
                    company={item.travelCompany}
                    rating={item.rating}
                />
            ))}
        </div>
    )*/


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
                          value={source}
                          onChange={handleChangeSource}
                        >
                        {cities.map(item => (
                            <MenuItem value={item}>{capitalize(item)}</MenuItem>
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
                          value={destination}
                          onChange={handleChangeDestination}
                        >
                        {cities.map(item => (
                            (item != source)?
                            <MenuItem value={item}>{capitalize(item)}</MenuItem>:null
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
                          value={selectedDate}
                          onChange={handleDateChange}
                        >
                          <MenuItem value={"2019-12-30"}>2019-12-30</MenuItem>
                          <MenuItem value={"2020-01-02"}>2020-01-02</MenuItem>
                          <MenuItem value={"2020-02-15"}>2020-02-15</MenuItem>
                        </Select>
                    </FormControl>

                    <Button type="submit" variant="contained" color="secondary" className={classes.searchButton} onClick={handleSubmit}>
                        Search
                    </Button>
                </div>            
            </div>

            <div className={classes.searchResultsWrapper}>
                <div className={classes.resultCards}>
                    {(results.length==0)?
                    <div></div>:
                    <div>
                        <h1 style={{marginBottom: '25px'}}>Available Options</h1>
                        <hr style={{width: "140px"}} className={classes.headerLine}/>
                        <FormControl style={{minWidth: '20px', width: '200px', margin: '20px'}} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={sortby}
                              onChange={handleChangeSortBy}
                            >
                            <MenuItem value={"rating"}>Rating</MenuItem>
                            <MenuItem value={"seats"}>Available Seats</MenuItem>
                            </Select>
                        </FormControl>
                        <SearchResults sortby={sortby} results={results}/>
                    </div>}
                </div>
            </div>

            <div style={{transform: 'rotate(-4.5deg)', position: 'relative', marginTop: '-150px', zIndex: '-1'}}>
                <img src="https://s2.rdbuz.com/web/images/home/city_scape_app_download.png" height="auto" width="100%"/>
            </div>
        </div>
    );
}

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

const Cards = (props) => {    
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
        <Cards 
            start={item.startDate.substring(0,10)}
            end={item.endDate.substring(0,10)}
            price={item.distance.substring(0,3)}
            seats={item.availableSeats}
            company={item.travelCompany}
            rating={item.rating}
        />))
    )
}