// frontend/react_app/src/components/AirportInfo.js

import React, { useState } from 'react';

const AirportInfo = ({ airportCode }) => {
    const [airportInfo, setAirportInfo] = useState(null);

    const fetchAirportInfo = async () => {
        try {
            const response = await fetch(`http://localhost:5000/airport/${airportCode}`);
            const data = await response.json();
            setAirportInfo(data);
        } catch (error) {
            console.error('Error fetching airport info:', error);
        }
    };

    return (
        <div>
            <h2>Airport Information</h2>
            <button onClick={fetchAirportInfo}>Fetch Airport Info</button>
            {airportInfo && (
                <div>
                    <p>Code: {airportInfo.code}</p>
                    <p>Name: {airportInfo.name}</p>
                    <p>City: {airportInfo.city}</p>
                    <p>Country: {airportInfo.country}</p>
                </div>
            )}
        </div>
    );
};

export default AirportInfo;
