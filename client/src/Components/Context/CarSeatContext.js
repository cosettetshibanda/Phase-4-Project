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

    return(
        <CarSeatContext.Provider value={{carSeats, setCarSeats, addCarSeat}}>{children}</CarSeatContext.Provider>
    )
}

export {CarSeatContext, CarSeatProvider}

