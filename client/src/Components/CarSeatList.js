import { useContext, useEffect, useState } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
import CarSeatCard from "./CarSeatCard";


function CarSeatList() {
    const [carSeats, setCarSeats] = useState({})
    const { setErrors, currentUser, setCurrentUser} = useContext(UsersContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/carseats") 
        .then(r => r.json())
        .then(data => setCarSeats(data))
}, [])



    const carSeatCards = carSeats.map(carSeat => <CarSeatCard key = {carSeat.id} carSeat={carSeat}/>)

    return (
        <div>{carSeatCards} </div>
    )



}

export default CarSeatList