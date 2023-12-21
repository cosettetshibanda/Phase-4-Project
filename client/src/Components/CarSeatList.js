import { useContext, useEffect, useState } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
import CarSeatCard from "./CarSeatCard";
import { CarSeatContext } from "./Context/CarSeatContext";



function CarSeatList() {
    const navigate = useNavigate();
    const {carSeats} = useContext(CarSeatContext)
    const { loggedIn} = useContext(UsersContext)
  

    const [errors, setErrors] = useState()
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)



    useEffect(() => {
        if(!loggedIn){
            navigate("/")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])



    const carSeatCards = carSeats.map(carSeat => <CarSeatCard key={carSeat.id} carSeat={carSeat}/>)

    return (
        <>
            {errorsList}
            <h2 className="title">Here are all the Car Seats!</h2>
            <div className="carSeatList">{carSeatCards}</div>
        </>
    )



}

export default CarSeatList