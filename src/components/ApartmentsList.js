const ApartmentsList = ({apartments}) => {

    return <>
        <h1>ApartmentsList</h1>
        {apartments.map(apartment => {
            return <div key={apartment._id}>
            Title: {apartment.title} <br />
            pricePerDay: {apartment.pricePerDay} <br />
            <a href={"/apartments/"+apartment._id}>View Details</a>
            <br /><br />
            </div>
        })}
    </>
}

export default ApartmentsList;