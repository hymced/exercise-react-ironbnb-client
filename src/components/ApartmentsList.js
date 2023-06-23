import './ApartmentsList.css'
import { Link } from 'react-router-dom'

const ApartmentsList = ({apartments}) => {

    return <>
        <section className="ApartmentsList">
            <h1>ApartmentsList</h1>
            {apartments.map(apartment => {
                return <div key={apartment._id} className="apartment-summary">
                <h3>Title: {apartment.title}</h3>
                <img src={apartment.img} alt={apartment.title} />
                <p>Price/day: {apartment.pricePerDay}</p>
                <a href={"/apartments/"+apartment._id}>View Details</a>
                {/* <Link to={"/apartments/"+apartment._id}>View Details</Link> */}
                </div>
            })}
        </section>
    </>
}

export default ApartmentsList;