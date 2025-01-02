import React from 'react';
import LandingPage from './Pages/LandingPage/LandingPage';
import { WeatherProvider } from './components/index';

function App() {
    return (
        <WeatherProvider>
          <LandingPage />
        </WeatherProvider>
    );
}

export default App;
