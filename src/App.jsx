import React, { useState } from 'react';
import Banner from '../components/Banner';
import Buttons from './components/Buttons';
import Table from './components/Table';
import satData from './satData';

function App() {
    let [sat, setSat] = useState(satData);

    let displaySats = [...new Set(satData.map(data => data.orbitType))];

    let filterByType = currentType => {
        let filteredSats = satData.filter(newSatDisplay => newSatDisplay.orbitType === currentType);
        setSat(filteredSats);
    };

    return (
        <>
            <Banner />
            <Buttons filterByType={filterByType} displaySats={displaySats} />
            <Table sat={sat} />
        </>
    );
}

export default App;