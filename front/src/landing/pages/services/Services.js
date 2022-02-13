import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

// import Navbar from '../../Navbar';
import { getPlacesData } from '../../../api';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';
import PlaceDetails from './PlaceDetails/PlaceDetails';
// import { getPlacesData } from './api';

function Services() {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);


    useEffect(() => {
        // console.log(coordinates, bounds);

        getPlacesData() //bounds.sw, bounds.ne
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds]);

    return (
        <>
            {/* <Navbar /> */}
            <CssBaseline>
                <Header />
                <Grid container spacing={3} style={{width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <List places={places}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Map 
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                        />
                    </Grid>
                </Grid>
            </CssBaseline>
        </>
        
    )
}

export default Services
