import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,region,name,flags} = props.country;
    // console.log(props.country);
    return (
        <div className='country bg-info rounded'> 
        <h2>Country Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p><small>Region: {region}</small></p>
        <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;