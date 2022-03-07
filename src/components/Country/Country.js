import React from 'react';
import './Country.css';

const Country = (props) => {

    const flagStyle = {
        height: '50px'
    }
    
     const countryStyle = {
         border: '1px solid tomato',
         margin: '10px',
         padding: '10px'
     }

    const {name, population, region, flags} = props.country;
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h4>This is a {name.common}</h4>
            <img style={flagStyle} src={flags.svg} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;