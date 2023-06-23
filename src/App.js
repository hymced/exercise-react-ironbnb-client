import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';
import CreateApartmentNotControlled from './components/CreateApartmentNotControlled';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [apartments, setApartments] = useState([]);

  // const baseUrl = "https://ironbnb-m3.herokuapp.com/apartments";

  useEffect(() => {
    getApartments();
  }, [])

  const getApartments = () => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then(response => {
        setApartments(response.data);
      })
      .catch(e => console.log(e))
  }

  const renderApartmentsOrLoading = () => {
    if (apartments.length > 0) {
      return <ApartmentsList apartments={apartments} />
    } else {
      return <h1>Loading...</h1>
    }
  }

  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}
      {/* <img src={ironhackersImg} alt="ironhackers" /> */}

      <NavBar />

      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/apartments" element={renderApartmentsOrLoading()}></Route>
      <Route path="/apartments/create" element={<CreateApartment callbackGetApartments={getApartments} />}></Route>
      <Route path="/apartments/create2" element={<CreateApartmentNotControlled callbackGetApartments={getApartments} />}></Route>
      <Route path="/apartments/:apartmentId" element={<ApartmentDetails />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
