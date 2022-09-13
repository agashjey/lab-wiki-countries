import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CountryDetails = ({countriesState}) => {
    const {cca3} = useParams();
    if (!countriesState.length) return <div>Loading....</div>
    
    const country = countriesState.find(country => country.alpha3Code === cca3);
    
    const cca2 = country.alpha2Code.toLowerCase();
    const url = `https://flagpedia.net/data/flags/icon/72x54/${cca2}.png`;

    return (
        <div className='CountryDetails col-7' key={country.alpha3Code}>
            <h1>{country.name.common} <img src={url} alt="flag"/></h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => {
                                    return (
                                        <li key={border}>
                                            <Link  to={`/countries/${border}`}>
                                                {countriesState.find(country => country.alpha3Code === border).name.common}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails