import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { ReviewsContext } from "./Context/ReviewsContext";


const ReviewCard = ({ review }) => {

    const navigate = useNavigate();
    const {currentUser, updateUserDeletedReviews} = useContext(UsersContext);
    const {handleDeleteReview} = useContext(ReviewsContext);
  
    async function deleteReview() {
      const response = await fetch(`/reviews/${review.id}`, {
        method: 'DELETE'
      });
      const data = await ((response).json());
      handleDeleteReview(data)
      updateUserDeletedReviews(data)
    };
  
  
    return (
      <div>
        <figure>
          <h1>{review.carseat?.name}</h1>
          <img src={review.carseat?.img} alt={review.carseat.img} width={100} height={150} />
          <h2>{review.stars}/5 Stars</h2>
          <p>{review.summary} -{review.user?.username}</p>
          {currentUser && currentUser.id === review.user?.id ? <>
            <button onClick={() => navigate(`/reviews/${review.id}/edit`)}>Edit</button>
            <button onClick={deleteReview}>Delete</button> 
          </> : null}
          </figure>
      </div>
    )
  }
  
  export default ReviewCard