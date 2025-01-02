import React, { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';
import Button from '../Button/Button';
import './CurrentWeather.scss';

const CurrentWeather = () => {
    const { data, units, toggleUnits } = useContext(WeatherContext);

    if (!data || !data.city) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    return (
        <div className="TempCity">
            <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="weather-icon"/>
            <h2>{data.city.name}, {data.city.country}</h2>
            <p>{data.list[0].weather[0].main}</p>
            <div className="Temp">
                
                <h1>{Math.round(data.list[0].main.temp)}°</h1>
                <Button onClick={() => toggleUnits('metric')} disabled={units === 'metric'}>
                    C
                </Button>
                <Button onClick={() => toggleUnits('imperial')} disabled={units === 'imperial'}>
                    F
                </Button>
            </div>
            <p>
                Pressure: {data.list[0].main.pressure} hPa | 
                Humidity: {data.list[0].main.humidity}% | 
                Wind Speed: {data.list[0].wind.speed} m/s
            </p>
        </div>
    );
};

export default CurrentWeather;
