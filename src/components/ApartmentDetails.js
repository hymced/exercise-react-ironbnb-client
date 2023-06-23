import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ApartmentDetails = () => {
    const {apartmentId} = useParams()

    const [apartment, setApartment] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/${apartmentId}`)
            .then(response => {
                setApartment(response.data)
            })
            .catch(e => console.log(e))
    }, [])

    return <>
        <h1>ApartmentDetails</h1>
        { apartment.img
            ? <img src={apartment.img} alt={apartment.name} style={{width: "400px"}}/>
            : <img src="https://fakeimg.pl/400x200/" alt="default" />
        }
        <div key={apartment._id}>
            Title: {apartment.title} <br />
            pricePerDay: {apartment.pricePerDay} <br />
        </div>
    </>
}

export default ApartmentDetails;