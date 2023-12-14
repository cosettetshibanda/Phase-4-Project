// import { useContext, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { UsersContext } from "./Context/UsersContext";
// import { ErrorsContext } from "./Context/ErrorsContext";
// import ReviewCard from "./ReviewCard";


// const UserReviews = () => {

//     const navigate = useNavigate();
//     const {user_id} = useParams();
//     const {loggedIn, users} = useContext(UsersContext);
//     const {setErrors} = useContext(ErrorsContext);

    
//      useEffect(() => {
//         if(!loggedIn){
//            navigate("/")
//            }
//             setErrors([]);
//     }, [ loggedIn, navigate, setErrors]);


//     const userToDisplay = users.find((user) => user.id === parseInt(user_id, 10))

//     const currentReviewCards = userToDisplay.reviews?.map(review => <ReviewCard key={review.id} review={review} />);

//   return (
//     <div>
//       { currentReviewCards.length > 0 ? currentReviewCards : "This User Doesn't Have Any Reviews"}
//     </div>
//   )
// }

// export default UserReviews