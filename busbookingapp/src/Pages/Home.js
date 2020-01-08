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
import SearchOrganism from '../Organisms/SearchOrganism'
import SearchResultsOrganism from '../Organisms/SearchResultsOrganism'
import CityScapeMedia from '../Atoms/CityScapeMedia'
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
            <SearchOrganism
                source={source}
                destination={destination}
                selectedDate={selectedDate}
                cities={cities}
                handleDateChange={handleDateChange}
                handleChangeDestination={handleChangeDestination}
                handleChangeSource={handleChangeSource}
                handleSubmit={handleSubmit}
                capitalize={capitalize}
            />

            <SearchResultsOrganism
                sortby={sortby}
                handleChangeSortBy={handleChangeSortBy}
                results={results}
            />

            <CityScapeMedia/>
        </div>
    );
}