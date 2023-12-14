import { useContext, useEffect } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
import CarSeatCard from "./CarSeatCard";
import { CarSeatContext } from "./Context/CarSeatContext";
import { ErrorsContext } from "./Context/ErrorsContext";


function CarSeatList() {
    const navigate = useNavigate();
    const {carSeats} = useContext(CarSeatContext)
    const { loggedIn} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)


    useEffect(() => {
        if(!loggedIn){
            navigate("/login")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])



    const carSeatCards = carSeats.map(carSeat => <CarSeatCard key={carSeat.id} carSeat={carSeat}/>)

    return (
        <>
            <h2 className="title">Here are all the Car Seats!</h2>
            <div className="carSeatList">{carSeatCards}</div>
        </>
    )



}

export default CarSeatList