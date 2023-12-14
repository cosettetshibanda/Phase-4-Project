import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext"
import { ErrorsContext } from "./Context/ErrorsContext"
import { ReviewsContext } from "./Context/ReviewsContext"
import { CarSeatContext } from "./Context/CarSeatContext"


const UserCarSeats = () => {
    const navigate = useNavigate()
    const {loggedIn, currentUser} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)
    const {carSeats} = useContext(CarSeatContext)
    // const {reviews} = useContext(ReviewsContext)

    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    console.log(currentUser?.carseats)


    // const findCarSeatName = carSeats.find((carseat) => {
        //     if(currentUser?.carseat_id === carseat.id) {
            //         return carseat.name
            //     }
            // })
            // const findUsername = carseat.users.find((user) => {
                //     if (user.id === review.user_id){
                    //       return user.username
                    //     } else {
                        //       return null
                        //     }
                        //   })
                        
                        const myReviews = currentUser?.reviews?.filter((review) => review.user_id === parseInt(currentUser?.id, 10));

                        // Create a Set to store unique car seat names globally
                        const uniqueCarSeatNames = new Set();
                        
                        const myCarSeatList = myReviews?.map((review) => {
                          const findCarSeatName = carSeats.find((carseat) => carseat.id === review.carseat_id);
                          const carSeatName = findCarSeatName?.name || "No Car Seat Found";
                        
                          // Check if the car seat name is already in the global unique names Set
                          if (!uniqueCarSeatNames.has(carSeatName)) {
                            uniqueCarSeatNames.add(carSeatName);
                        
                            return (
                              <li key={review.id}>
                                <Link to={`/carseats/${review.carseat_id}`}>{carSeatName}</Link>
                              </li>
                            );
                          }
                        
                          // If the car seat name is already in the global Set, return null to skip rendering
                          return null;
                        });

                        
                        // const myReviews = currentUser?.reviews?.filter((review) => review.user_id === parseInt(currentUser?.id, 10));

                        // const myCarSeatList = myReviews?.map((review) => {
                        //     const findCarSeatName = carSeats.find((carseat) => carseat.id === review.carseat_id);
                        //     const carSeatName = findCarSeatName?.name || "No Car Seat Found";
                          
                        //     return (
                        //       <li key={review.id}>
                        //         <Link to={`/carseats/${review.carseat_id}`}>{carSeatName}</Link>
                        //       </li>
                        //     );
                        //   });
    //                     const findCarSeatName = carSeats.find((carseat) => carseat.id === myReviews.carseat_id);
                    
    //                     const carSeatName = findCarSeatName?.name || "No Car Seat Found";
    // // const myReviews = currentUser.reviews.filter((review) => review.user_id === parseInt(currentUser.id, 10))
    // const myCarSeatList = myReviews?.map(review => <li key={review.id}><Link to={`/carseats/${review.carseat_id}`}>{carSeatName}</Link></li>)

    return (
        <>
        <h3>Car seats you have reviewed.</h3>
        <ul>
            {myCarSeatList?.length > 0 ? myCarSeatList : "You haven't reviewed anything yet."}
        </ul>
        </>
    )
}

export default UserCarSeats