import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReviewsContext } from "./Context/ReviewsContext";
import { UsersContext } from "./Context/UsersContext";
import { CarSeatContext } from "./Context/CarSeatContext";


function ReviewEditForm ({review, handleEditReview, toggleEditForm}) {

    const navigate = useNavigate();
    // const {reviews, editReview} = useContext(ReviewsContext);
    const {loggedIn, currentUser, updateUserRev} = useContext(UsersContext);
    // const {id} = useParams();
    const {carSeats} = useContext(CarSeatContext)

    const {id} = review
    const [editFormData, setEditFormData] = useState(review)

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
      };
    
    // const location = useLocation()
    // const passedData = location.state
    // console.log(passedData.review)
    // // const review = passedData.review

    // const [formData, setFormData] = useState({
    //     carseat_name: "",
    //     carseat_id: "",
    //     user_id: "",
    //     stars: "",
    //     summary: ""
    // });

    // useEffect(() => {
    //     if(!loggedIn) {
    //         navigate("/")
    //     }


    //     if(reviews.length > 0) {
    //         const review = reviews.find(review => review.id === parseInt(id, 10));
    //         if(currentUser.id !== review.user_id) {
    //             navigate("/")
    //         }
    //         setFormData({
    //             carseat_name: review.carseat.name,
    //             carseat_id: review.carseat_id,
    //             user_id: currentUser.id,
    //             stars: review.stars,
    //             summary: review.summary
    //         })
    //     }
    // }, [carseat, loggedIn, currentUser, navigate, id]);

    // const handleChange = (event) => {
    //     setFormData({...formData, [event.target.name]: event.target.value})
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editFormData)
        })
            .then(response => response.json())
            .then(data => {
                handleEditReview(data)
                updateUserRev(data)
                toggleEditForm()
            })

    }

  return (
    <>
        <h3>Editing Your Review </h3>
        <form onSubmit={handleSubmit}>
            <label>Stars (1-5)</label>
            <input
                type="text"
                name="stars"
                value={editFormData.stars}
                onChange={handleEditChange}
            />
            <label>Summary</label>
            <textarea
                type="text"
                name="summary"
                value={editFormData.summary}
                onChange={handleEditChange}
            />
            <input type="submit" value="Update Review"/>
        </form>
    </>
  );
};

export default ReviewEditForm