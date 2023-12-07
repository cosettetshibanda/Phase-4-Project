import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { ReviewsContext } from "./Context/ReviewsContext";
import { CarSeatContext } from "./Context/CarSeatContext";


const ReviewCard = ({ review }) => {

    const navigate = useNavigate();
    const {currentUser, updateUserDeletedReviews} = useContext(UsersContext);
    const {handleDeleteReview} = useContext(CarSeatContext);
  


    const deleteReview = () => {
      fetch(`/reviews/${review.id}`, {
        method: "DELETE",
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the response is empty (no content), resolve the promise
        if (response.status === 204) {
          return Promise.resolve();
        }
        // Otherwise, parse the response as JSON
        return response.json();
      })
      .then(data => {
        // Check if data is defined before using it
        if (data) {
          // Handle the JSON data
        }
        handleDeleteReview(review);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
  //   const deleteReview = () => {
  //     fetch(`/reviews/${review.id}`, {
  //         method: "DELETE",
  //     })
  //     .then(r => r.json())
  //     .then(() => {
  //         handleDeleteReview(review)
  //     })
  // }
  
    return (
      <div>
        <figure>
          <h2 className="carSeatName">{review.carseat?.name}</h2>
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