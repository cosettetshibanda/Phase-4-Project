import { useContext, useState } from "react";
import { UsersContext } from "./Context/UsersContext";



function ReviewEditForm ({review, handleEditReview, toggleEditForm}) {
    const {updateUserRev} = useContext(UsersContext);
    const {id} = review
    const [editFormData, setEditFormData] = useState(review)

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
      };
    
    

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