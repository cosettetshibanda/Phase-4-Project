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
    const {setErrors, loading} = useContext(ErrorsContext)


    useEffect(() => {
        if(!loading && !loggedIn){
            navigate("/login")
        }
        return() => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors])


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
        <>
            <h3>Here are all the Car Seats!</h3>
            <div>{carSeatCards}</div>
        </>
    )



}

export default CarSeatList