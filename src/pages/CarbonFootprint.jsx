import React, { useState } from 'react';
import './pageStyles/CarbonFootprint.css';

const CarbonFootprint = () => {
    const [electricity, setElectricity] = useState('');
    const [milesDriven, setMilesDriven] = useState('');
    const [footprint, setFootprint] = useState(null);

    const calculateFootprint = () => {
        const electricityEmission = parseFloat(electricity) * 0.92; 
        const drivingEmission = parseFloat(milesDriven) * 0.404; 
        setFootprint((electricityEmission + drivingEmission).toFixed(2));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Carbon Footprint Calculator</h1>
            <div>
                <label>
                    Electricity Usage (kWh):
                    <input
                        type="number"
                        value={electricity}
                        onChange={(e) => setElectricity(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Miles Driven:
                    <input
                        type="number"
                        value={milesDriven}
                        onChange={(e) => setMilesDriven(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calculateFootprint}>Calculate</button>
            {footprint !== null && (
                <div>
                    <h2>Your Carbon Footprint: {footprint} kg CO2</h2>
                </div>
            )}
        </div>
    );
};

export default CarbonFootprint;