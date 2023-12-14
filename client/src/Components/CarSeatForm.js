import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UsersContext } from './Context/UsersContext';
import { CarSeatContext } from './Context/CarSeatContext';
import { ErrorsContext } from './Context/ErrorsContext';


function CarSeatForm ({loading}) {
    const navigate = useNavigate();
    const {addCarSeat} = useContext(CarSeatContext)
    const {loggedIn} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)

    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])


    const [formData, setFormData] = useState({
        name: "",
        mode: "",
        img: "", 
        expiration: "",
        price: "",
        features: ""
    })
    
    
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/carseats", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                addCarSeat(data)
                navigate("/carseats")
            }
        })
        setFormData({
            name: "",
            mode: "",
            img: "", 
            expiration: "",
            price: "",
            features: ""
        })
    }


    return (
        <div>
            <h3>Add a Car Seat to Our Collection</h3>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange} 
            />
            <label>Mode:</label>
            <input
                type="text"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
            />
            <label>Image:</label>
            <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
            />
            <label>Price:</label>
            <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
            <label>Features:</label>
            <input
                type="text"
                name="features"
                value={formData.features}
                onChange={handleChange}
            />
            <label>Expiration:</label>
            <input
                type="text"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
        </div>
    )
}

export default CarSeatForm