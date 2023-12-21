import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
// import { ErrorsContext } from "./Context/ErrorsContext";
import ReviewCard from "./ReviewCard";
import { CarSeatContext } from "./Context/CarSeatContext";


const CarSeatReviews = () => {
    const navigate = useNavigate();
    const {carseat_id} = useParams();
    const {loggedIn, removeCarSeatRev} = useContext(UsersContext);
    // const {setErrors} = useContext(ErrorsContext);
    const {carSeats} = useContext(CarSeatContext)
    const [carseat, setCarseat] = useState({ reviews: [] });

const selectedCarSeat = carSeats.find((carseat) => carseat.id === parseInt(carseat_id));

useEffect(() => {
  if (!loggedIn) {
    navigate("/");
  }
}, [loggedIn, navigate]);

useEffect(() => {
  if (selectedCarSeat) {
    // Update the state only if the selected car seat is different from the current one
    if (selectedCarSeat.id !== carseat.id) {
      setCarseat(selectedCarSeat);
    }
  }
}, [selectedCarSeat, carseat.id]);



        const handleDeleteReview = (deleteReviewId) => {
            const removeReview = carseat.reviews.filter(
                (review) => review.id !==deleteReviewId
            )
            setCarseat((prevState) => ({...prevState, reviews: removeReview}))
            removeCarSeatRev(carseat)
            console.log(carseat)
        }

      useEffect(() => {
        console.log('Carseat state changed:', carseat);
      }, [carseat]);

    const handleEditReview = (updatedReview) => {
        const updateReviews = carseat.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            } else {
                return review
            }
        })
        setCarseat((prevState) => ({...prevState, reviews: updateReviews}))
    }


    const reviewCards = carseat.reviews.map(review => <ReviewCard key={review.id} handleEditReview={handleEditReview} carseat={carseat} review={review} handleDeleteReview={handleDeleteReview}/>);


return (
    <>
        <h3>Here's a List of Reviews</h3>
        <h2 className="carSeatName">{carseat.name}</h2>
          <img src={carseat.img} alt={carseat.img} width={100} height={150} />
        {/* <ReviewCard currentCarseat={carseat} handleAddReview={handleAddReview} handleDeleteReview={handleDeleteReview} id={carseat_id} /> */}
        {reviewCards?.length > 0 ? reviewCards : "This Car Seat Does Not Have Any Reviews"}
    </>
  )
}

export default CarSeatReviews