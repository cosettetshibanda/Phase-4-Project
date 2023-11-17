import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewsContext } from "./Context/ReviewsContext";
import { UsersContext } from "./Context/UsersContext";
import ReviewCard from "./ReviewCard";


function ReviewsList () {
    const navigate = useNavigate()
    const {reviews, handleDeleteReview} = useContext(ReviewsContext)
    const {loggedIn, currentUser} = useContext(UsersContext)


    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
    }, [loggedIn, navigate])

    const reviewCards = reviews?.map((review, idx) => <ReviewCard key={idx} review={review} handleDeleteReview={handleDeleteReview} currentUser={currentUser} />)


    return (
        <>
        <h3>Here's a List of Everyone's Reviews</h3>
        <div>{ reviewCards }</div>
        </>
      );
}

export default ReviewsList