import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import ReviewEdit from "./ReviewEdit";


const ReviewCard = ({ review, carseat, handleEditReview, currentReviews, handleDeleteReview}) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const navigate = useNavigate();
    const {currentUser} = useContext(UsersContext);

  
    const deleteReview = async () => {
      try {
        const response = await fetch(`/reviews/${review.id}`, {
          method: "DELETE"
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
 
        await handleDeleteReview(review.id);
      } catch (error) {
        console.error('Error deleting review:', error);
      }
      navigate(-1)
    };

    


    const toggleEditForm = () => {
      setShowEditForm(!showEditForm);
    };
  
    

  const findUsername = carseat.users.find((user) => {
    if (user.id === review.user_id){
      return user.username
    } else {
      return null
    }
  })
  
    return (
      <div>
        <figure>
          <h2 className="carSeatName">{review.carseat?.name}</h2>
          <h2>{review.stars}/5 Stars</h2>
          {findUsername ? (
            <p>{review.summary} - {findUsername.username}</p>
          ) : (
            <p>{review.summary} - No username found</p>
          )}
          {showEditForm ? (
            <ReviewEdit 
              review={review}
              toggleEditForm={toggleEditForm}
              handleEditReview={handleEditReview}
            />
          ) : (
             currentUser && currentUser.id === review.user_id ? (
              <>
                <button onClick={toggleEditForm}>Edit</button>
                <button onClick={deleteReview}>Delete</button> 
              </>
            ) : null
          )}
          
          </figure>
      </div>
    )
  }
 
  export default ReviewCard