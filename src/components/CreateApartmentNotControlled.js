import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateApartment = ({callbackGetApartments}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            img: e.target.elements.img.value,
            title: e.target.elements.title.value,
            pricePerDay: e.target.elements.title.pricePerDay
        }
        
        axios
            .post(`${process.env.REACT_APP_API_URL}`, data)
            .then(response => {
                callbackGetApartments()
                navigate("/apartments")
            })
            .catch(e => console.log(e))
    }

    return <>
        <h1>CreateApartmentNotControlled</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" />
            </label>
            <label>
                pricePerDay:
                <input type="text" name="pricePerDay" />
            </label>
            <label>
                img:
                <input type="text" name="img" />
            </label>
            <button type="submit"> Create </button>
        </form>
    </>
}

export default CreateApartment;