import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { ReviewsContext } from "./Context/ReviewsContext";


const ReviewCard = ({ carseat }) => {

    const navigate = useNavigate();
    const {currentUser, updateUserDeletedReviews} = useContext(UsersContext);
    const {handleDeleteReview} = useContext(ReviewsContext);
  
    async function deleteReview() {
      const response = await fetch(`/reviews/${carseat.review.id}`, {
        method: 'DELETE'
      });
      const data = await ((response).json());
      handleDeleteReview(data)
      updateUserDeletedReviews(data)
    };
  
  reviews = carseat.review.map((review) => {review})

    return (
      <div>
        <figure>
          <h1>{carseat.name}</h1>
          <img src={carseat.img} alt={carseat.img} width={100} height={150} />
          <h2>{carseat.review.stars}/5 Stars</h2>
          <p>{carseat.buttonreview.summary} -{carseat.review.user?.username}</p>
          {currentUser && currentUser.id === carseat.review.user?.id ? <>
            <button onClick={() => navigate(`/reviews/${carseat.review.id}/edit`)}>Edit</button>
            <button onClick={deleteReview}>Delete</button> 
          </> : null}
          </figure>
      </div>
    )
  }
  
  export default ReviewCard