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
        <div className="container">
            <div className="header">Carbon Footprint Calculator</div>
            <div className="card">
                <div className="form-group">
                    <label>Electricity Usage (kWh per month):</label>
                    <input
                        type="number"
                        value={electricity}
                        onChange={(e) => setElectricity(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Miles Driven (per month):</label>
                    <input
                        type="number"
                        value={milesDriven}
                        onChange={(e) => setMilesDriven(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Natural Gas Usage (therms per month):</label>
                    <input
                        type="number"
                        value={naturalGas}
                        onChange={(e) => setNaturalGas(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Waste Produced (kg per week):</label>
                    <input
                        type="number"
                        value={waste}
                        onChange={(e) => setWaste(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Water Usage (gallons per month):</label>
                    <input
                        type="number"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                    />
                </div>
                <button className="button" onClick={calculateFootprint}>Calculate</button>

                {footprint !== null && (
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <h3>Your Annual Carbon Footprint:</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{footprint} kg CO2</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarbonFootprint;
