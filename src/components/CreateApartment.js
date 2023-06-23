import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateApartment = ({callbackGetApartments}) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            img: img,
            title: title,
            pricePerDay: pricePerDay
        }
        
        axios
            .post(`${process.env.REACT_APP_API_URL}`, data)
            .then(response => {
                callbackGetApartments()
                navigate("/apartments")
            })
            .catch(e => console.log(e))

        setTitle("");
        setPricePerDay("");
        setImg("");
    }

    return <>
        <h1>CreateApartment</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </label>
            <label>
                pricePerDay:
                <input type="text" name="pricePerDay" value={pricePerDay} onChange={(e) => {setPricePerDay(e.target.value)}}/>
            </label>
            <label>
                img:
                <input type="text" name="img" value={img} onChange={(e) => {setImg(e.target.value)}}/>
            </label>
            <button type="submit"> Create </button>
        </form>
    </>
}

export default CreateApartment;