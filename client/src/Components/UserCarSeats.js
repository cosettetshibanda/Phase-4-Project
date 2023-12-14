import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext"
import { ErrorsContext } from "./Context/ErrorsContext"
import { CarSeatContext } from "./Context/CarSeatContext"


const UserCarSeats = () => {
    const navigate = useNavigate()
    const {loggedIn, currentUser} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)
    const {carSeats} = useContext(CarSeatContext)
  

    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])



                        
    const myReviews = currentUser?.reviews?.filter((review) => review.user_id === parseInt(currentUser?.id, 10));
        const uniqueCarSeatNames = new Set();
                        
            const myCarSeatList = myReviews?.map((review) => {
                const findCarSeatName = carSeats.find((carseat) => carseat.id === review.carseat_id);
                const carSeatName = findCarSeatName?.name || "No Car Seat Found";
                    if (!uniqueCarSeatNames.has(carSeatName)) {
                        uniqueCarSeatNames.add(carSeatName);  
                    return (
                        <li key={review.id}>
                            <Link to={`/carseats/${review.carseat_id}`}>{carSeatName}</Link>
                        </li>
                        );
                    }
                        return null;
                        });

                        
    return (
        <>
        <h3>Car seats you have reviewed.</h3>
        <ul>
            {myCarSeatList?.length > 0 ? myCarSeatList : "You haven't reviewed anything yet."}
        </ul>
        </>
    )
}

export default UserCarSeats