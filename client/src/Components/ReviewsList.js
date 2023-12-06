import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewsContext } from "./Context/ReviewsContext";
import { UsersContext } from "./Context/UsersContext";
import ReviewCard from "./ReviewCard";
import { CarSeatContext } from "./Context/CarSeatContext";


function ReviewsList () {
    const navigate = useNavigate()
    const {carSeats} = useContext(CarSeatContext)
    const {reviews, handleDeleteReview} = useContext(ReviewsContext)
    const {loggedIn} = useContext(UsersContext)


    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
    }, [loggedIn, navigate])

    const reviewCards = reviews.map((review, idx) => <ReviewCard key={idx} review={review} handleDeleteReview={handleDeleteReview} />)


    return (
        <>
        <h3>Here's a List of Everyone's Reviews</h3>
        <div>{ reviewCards }</div>
        </>
      );
}

export default ReviewsList