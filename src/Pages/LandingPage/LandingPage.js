import React from 'react';
import {Header, Search, CurrentWeather, Forecast, } from '../../components';
import './LandingPage.scss';


const LandingPage = () => {
    return (
        <section className="MainView">
            <Header />
            <Search />
            <CurrentWeather />
            <Forecast />
        </section>
    );
};

export default LandingPage;
