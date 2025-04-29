import React, { useState } from 'react';
import './pageStyles/CarbonFootprint.css';

const CarbonFootprint = () => {
    const [electricity, setElectricity] = useState('');
    const [milesDriven, setMilesDriven] = useState('');
    const [naturalGas, setNaturalGas] = useState('');
    const [waste, setWaste] = useState('');
    const [water, setWater] = useState('');
    const [footprint, setFootprint] = useState(null);

    const calculateFootprint = () => {
        const electricityEmission = parseFloat(electricity || 0) * 0.92; 
        const drivingEmission = parseFloat(milesDriven || 0) * 0.404;    
        const gasEmission = parseFloat(naturalGas || 0) * 5.3;           
        const wasteEmission = parseFloat(waste || 0) * 0.57 * 52;        
        const waterEmission = parseFloat(water || 0) * 0.0015;           

        const total = electricityEmission + drivingEmission + gasEmission + wasteEmission + waterEmission;

        setFootprint(total.toFixed(2));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Carbon Footprint Calculator</h1>
            <div>
                <label>
                    Electricity Usage (kWh per month):
                    <input
                        type="number"
                        value={electricity}
                        onChange={(e) => setElectricity(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Miles Driven (per month):
                    <input
                        type="number"
                        value={milesDriven}
                        onChange={(e) => setMilesDriven(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Natural Gas Usage (therms per month):
                    <input
                        type="number"
                        value={naturalGas}
                        onChange={(e) => setNaturalGas(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Waste Produced (kg per week):
                    <input
                        type="number"
                        value={waste}
                        onChange={(e) => setWaste(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Water Usage (gallons per month):
                    <input
                        type="number"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calculateFootprint}>Calculate</button>
            {footprint !== null && (
                <div>
                    <h2>Your Annual Carbon Footprint: {footprint} kg CO2</h2>
                </div>
            )}
        </div>
    );
};

export default CarbonFootprint;
