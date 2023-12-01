import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReviewsContext } from "./Context/ReviewsContext";
import { CarSeatContext } from "./Context/CarSeatContext";
import { UsersContext } from "./Context/UsersContext";
import { ErrorsContext } from "./Context/ErrorsContext";


const ReviewForm = () => {

    
    const navigate = useNavigate();
    const {addReview} = useContext(ReviewsContext);
    const {carSeats} = useContext(CarSeatContext);
    const {loggedIn, currentUser } = useContext(UsersContext);
    const {setErrors} = useContext(ErrorsContext);
    const {id} = useParams();
    
    const [carSeat, setCarSeat] = useState("");
    const [formData, setFormData] = useState({
        carseat_id: "",
        user_id: "",
        stars: "",
        summary: "",
    });
    
    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        if(carSeats.length > 0) {
            setCarSeat(carSeats.find(carSeat => carSeat.id === parseInt(id, 10)));
            setFormData({
                carseat_id: carSeat.id,
                user_id: currentUser.id, 
                stars: "",
                summary: "",
            })
        }
    }, [ currentUser.id, loggedIn, navigate, id, setErrors, carSeats, carSeat ]);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/reviews", {
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
                addReview(data)
                navigate(-1)
                setErrors([]);
            }
        })
    };

    return (
        <>
            <h3>Add a Review for {carSeat.name}</h3>
            <form onSubmit={handleSubmit}>
                <label>Stars (1-5)</label>
                <input
                    type="text"
                    name="stars"
                    value={formData.stars}
                    onChange={handleChange}
                />
                <label>Summary</label>
                <textarea
                    type="text"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default ReviewForm