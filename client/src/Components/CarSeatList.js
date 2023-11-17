import { useContext, useEffect, useState } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
import CarSeatCard from "./CarSeatCard";


function CarSeatList() {
    // const navigate = useNavigate();
    const { carSeats, loggedIn, setErrors} = useContext(UsersContext)


//     useEffect(() => {
//             fetch("/carseats") 
//             .then(r => r.json())
//             .then(data => setCarSeats(data))
// }, [])


// const loadCarSeats = () => {
//     if(currentUser) {
//        fetch('/carseats')
//         .then(resp =>{
//           if(resp.ok){
//             resp.json().then(setCarSeats)
//           }else{
//             resp.json().then(errors => setErrors(errors.error))
//           }
//         })
//     }
//   }

//   useEffect(loadCarSeats, [currentUser, navigate])

//   console.log(carSeats)

// useEffect(() => {
//     if(!loggedIn) {
//       navigate("/login")
//     }
//     return () => {
//       setErrors([])
//     }
//   }, [ loggedIn, navigate, setErrors]);

    const carSeatCards = carSeats.map(carSeat => <CarSeatCard key={carSeat.id} carSeat={carSeat}/>)

    return (
        <div>{carSeatCards}</div>
    )



}

export default CarSeatList