import React, { useState } from 'react';
import WeatherComponent from './components/WeatherComponent';

const App = () => {
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API or perform any other logic here using the "country" state value
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter a country"
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherComponent country={country} />
    </div>
  );
};

export default App;
