import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "./Context/UsersContext";
import { ErrorsContext } from "./Context/ErrorsContext";
import ReviewCard from "./ReviewCard";
import { CarSeatContext } from "./Context/CarSeatContext";


const CarSeatReviews = () => {
    const navigate = useNavigate();
    const {carseat_id} = useParams();
    const {loggedIn} = useContext(UsersContext);
    const {setErrors} = useContext(ErrorsContext);
    const {carSeats,} = useContext(CarSeatContext)
    const [carseat, setCarseat] = useState({ reviews: [] })

    const carSeat = carSeats.find((carseat) => carseat.id === parseInt(carseat_id))
    

    useEffect(() => {
        if(!loggedIn){
           navigate("/")
           }
            setErrors([]);
    }, [ loggedIn, navigate, setErrors]);

    useEffect(() => {
        if(carSeat){
            setCarseat(carSeat)
        }
    }, [carseat, carseat_id, carSeat])


    const handleDeleteReview = async (deletedRevId) => {
        // Filter out the review with the specified ID
        const updatedReviews = carseat.reviews.filter((review) => review.id !== deletedRevId);
      
        // Log the current state before updating
        console.log('Before updating state:', carseat);
      
        // Update the state with the new reviews
        setCarseat((prevState) => ({
          ...prevState,
          reviews: updatedReviews,
        }));
      
        // Log the state after updating
        console.log('After updating state:', carseat);
      };

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

    // const carSeatReviews = reviews?.filter((review) => review.carseat_id === parseInt(carseat_id, 10))

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