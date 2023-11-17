import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { ErrorsContext } from "./Context/ErrorsContext";
import { ReviewsContext } from "./Context/ReviewsContext";
import ReviewCard from "./ReviewCard";


const CarSeatReviews = () => {
    const navigate = useNavigate();
    const {book_id} = useParams();
    const {loading, loggedIn} = useContext(UsersContext);
    const {setErrors} = useContext(ErrorsContext);
    const {reviews, handleDeleteReview} = useContext(ReviewsContext);

    useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            setErrors([]);
    }, [ loggedIn, loading, navigate, setErrors]);

    const carSeatReviews = reviews?.filter((review) => review.carseat_id === parseInt(review.carseat_id, 10))

    const carSeatReviewCards = carSeatReviews?.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview}/>);

return (
    <>
        <h3>Here's a List of Reviews</h3>
        {carSeatReviewCards?.length > 0 ? carSeatReviewCards : "This Car Seat Does Not Have Any Reviews"}
    </>
  )
}

export default CarSeatReviews