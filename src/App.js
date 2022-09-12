import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
//import countries from "./countries.json"
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [countriesState, setCountriesState] = useState([]);
  
  useEffect(() => {
    const url = `https://ih-countries-api.herokuapp.com/countries`

    // let's use an API to get info about this country
    axios
      .get(url)
      .then((response) => {
        setCountriesState(response.data)
      }).catch((error) => {
          console.error(error);
      })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">

            <CountriesList countriesState={countriesState}/>
            <Routes>
              <Route path="/countries/:cca3" element={<CountryDetails countriesState={countriesState} />}/>
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
