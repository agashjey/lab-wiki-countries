import React from 'react';
import { Link } from 'react-router-dom'

const CountriesList = ({countriesState}) => {
  if (!countriesState.length) return <div>Loading....</div>
  return (
    <div className='CountriesList col-5'>
        <div className="list-group">
        {countriesState.map((country) => {
            return (
              <span className="list-group-item list-group-item-action" key={country.alpha3Code}>
                  <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>
              </span>
            );
        })}
        </div>
    </div>
  )
}

export default CountriesList;