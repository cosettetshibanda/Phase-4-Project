import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { Routes, Route } from "react-router-dom";
import ReviewEdit from "./ReviewEdit";
import { ReviewsContext } from "./Context/ReviewsContext";
import { CarSeatContext } from "./Context/CarSeatContext";


const ReviewCard = ({ review, carseat, handleEditReview, currentReviews, handleDeleteReview}) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const navigate = useNavigate();
    const {currentUser, updateUserDeletedReviews} = useContext(UsersContext);
    // const {handleDeleteReview} = useContext(CarSeatContext);
    // const {handleDeletedReview} = useContext(ReviewsContext)
  
    const deleteReview = async () => {
      try {
        const response = await fetch(`/reviews/${review.id}`, {
          method: "DELETE"
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Wait for the review to be deleted before updating the state
        await handleDeleteReview(review.id);
      } catch (error) {
        console.error('Error deleting review:', error);
        // Handle the error as needed
      }
      navigate(-1)
    };

    // const deleteReview = () => {
    //   fetch(`/reviews/${review.id}`, {
    //     method: "DELETE"
    //   })
    //   .then((resp) => {
    //     if (resp.ok) {
    //       handleDeleteReview(review.id)
    //     } else {
    //       throw new Error(`HTTP error! Status: ${resp.status}`);
    //     }
    //   })
    // }
    // const deleteReview = () => {
    //   fetch(`/reviews/${review.id}`, {
    //     method: "DELETE",
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     // If the response is empty (no content), resolve the promise
    //     if (response.status === 204) {
    //       return Promise.resolve();
    //     }
    //     // Otherwise, parse the response as JSON
    //     return response.json();
    //   })
    //   .then(review => {
    //     // Check if data is defined before using it
    //     if (review) {
    //       // Handle the JSON data
    //     }
    //     handleDeleteReview(review.id);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    // };



    const toggleEditForm = () => {
      setShowEditForm(!showEditForm);
    };
  
    // const handleEditClick = () => {
    //   // Assuming you want to pass some data to the "/reviews/:id/edit" route
    //   const dataToPass = {
    //     review
    //   };
  
    //   navigate(`/reviews/${review.id}/edit`, { state: dataToPass });
    // };
  //   const deleteReview = () => {
  //     fetch(`/reviews/${review.id}`, {
  //         method: "DELETE",
  //     })
  //     .then(r => r.json())
  //     .then(() => {
  //         handleDeleteReview(review)
  //     })
  // }

  // console.log(review);
  // console.log(review.user_id);
  // console.log(carseat.user?.username);

  // const findUsername = () => {
  //   if(review.user_id.includes(user.))
  // }

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
          {/* <img src={carseat.img} alt={review.carseat?.img} width={100} height={150} /> */}
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
          {/* {review.user_id ? (
               <p>{review.summary} - {findUsername}</p>
          ) : (
            <p>{review.summary} - {review.user.username}</p>
          )} */}
          {/* <p>{review.summary} -{review.user?.username}{findUsername} </p> */}
          </figure>
      </div>
    )
  }
  // () => navigate(`/reviews/${review.id}/edit`)
  export default ReviewCard