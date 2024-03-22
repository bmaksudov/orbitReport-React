import React from 'react';
import './styling.css';

function Buttons({ filterByType, setSat, displaySats }) {
    return (
        <div className="flex-container">
            {displaySats.map((sat, id) => {
                return (
                    <button onClick={() => filterByType(sat)} key={id}>
                        {sat} Orbit
                    </button>
                );
            })}
            <button onClick={() => setSat(satData)}>All Satellites</button>
        </div>
    );
}

export default Buttons;
