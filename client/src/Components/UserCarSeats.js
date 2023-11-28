import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext"
import { ErrorsContext } from "./Context/ErrorsContext"
import { ReviewsContext } from "./Context/ReviewsContext"


const UserCarSeats = () => {
    const navigate = useNavigate()
    const {loggedIn, currentUser} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)
    const {reviews} = useContext(ReviewsContext)

    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    const myReviews = reviews.filter((review) => review.user_id === parseInt(currentUser.id, 10))
    const myCarSeatList = myReviews?.map(review => <li key={review.carseat.id}><Link to={`/carseats/${review.carseat.id}`}>{review.carseat.name}</Link></li>)

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