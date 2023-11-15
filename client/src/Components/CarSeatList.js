import { useContext, useEffect } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
import CarSeatCard from "./CarSeatCard";


function CarSeatList() {
    const { setErrors, carSeats, currentUser, setCurrentUser} = useContext(UsersContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser){
            navigate("/login")
        }
        return () => {
            setErrors([])
        }
    },[setCurrentUser, navigate, setErrors])

console.log(carSeats)
    const carSeatCards = carSeats.map(carSeat => <CarSeatCard key = {carSeat.id} carSeat={carSeat}/>)

    return (
        <div>{carSeatCards} </div>
    )



}

export default CarSeatList