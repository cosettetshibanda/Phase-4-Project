import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import { useNavigate } from "react-router-dom";


const CarSeatContext = createContext(null)

const CarSeatProvider = ({children}) => {
    const [carSeats, setCarSeats] = useState([])
    const {loggedIn} = useContext(UsersContext)
    const navigate = useNavigate()

    const loadCarSeats = () => {
        if(loggedIn) {
            fetch("/carseats")
            .then(r => r.json())
            .then(data => setCarSeats(data))
        }
    }



    useEffect(loadCarSeats, [loggedIn, navigate])

    const addCarSeat = (carSeatObj) => {
        setCarSeats([...carSeats, carSeatObj])
    }



    function handleDeleteReview(review) {
        const carseat = carSeats.find((carseat) => carseat.id === review.carseat_id)
        const updatedReviews = carseat.reviews.filter((r) => r.id !==review.id);
        const updatedCarseat = carSeats.map((c) => c.id === carseat.id ? {...carseat, reviews: updatedReviews} : c)
      
        setCarSeats(updatedCarseat)
    }



    return(
        <CarSeatContext.Provider value={{handleDeleteReview, carSeats, setCarSeats, addCarSeat}}>{children}</CarSeatContext.Provider>
    )
}

export {CarSeatContext, CarSeatProvider}

