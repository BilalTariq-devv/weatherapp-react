import React, { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';
import Card from '../Card/Card';
import './Forecast.scss';


const Forecast = () => {
    const { data } = useContext(WeatherContext);

    if (!data || !data.list) return null;

    return (
        <div className="Card">
            {data.list
                .filter((_, index) => index % 8 === 0)
                .map((item, index) => (
                    <Card
                        key={index}
                        day={new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                        temp={`${Math.round(item.main.temp_min)}° / ${Math.round(item.main.temp_max)}°`}
                        weather={item.weather[0].main}
                        icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    />
                ))}
        </div>
    );
};

export default Forecast;
