import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewsContext } from "./Context/ReviewsContext";
import { UsersContext } from "./Context/UsersContext";
import ReviewCard from "./ReviewCard";
import { ErrorsContext } from "./Context/ErrorsContext";


function ReviewsList () {
    const navigate = useNavigate()
    const {reviews, handleDeleteReview} = useContext(ReviewsContext)
    const {loggedIn, currentUser} = useContext(UsersContext)
    const {loading} = useContext(ErrorsContext)

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/")
        }
    }, [loading, loggedIn, navigate])

    const reviewCards = reviews?.map((review, idx) => <ReviewCard key={idx} review={review} handleDeleteReview={handleDeleteReview} currentUser={currentUser} />)


    return (
        <>
        <h3>Here's a List of Everyone's Reviews</h3>
        <div>{ reviewCards }</div>
        </>
      );
}

export default ReviewsList