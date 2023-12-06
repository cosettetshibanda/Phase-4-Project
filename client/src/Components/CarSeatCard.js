import React from "react"
import { useNavigate } from "react-router-dom"

function CarSeatCard ({carSeat}) {
    const navigate = useNavigate()

    const rating = carSeat.reviews.map(review => review.stars).reduce((a, b) => a + b, 0)/carSeat.reviews.length

    return(
        <div className="carSeatCard">
            <h2 className="carSeatName">{carSeat.name}</h2>
            <h3 className="rating">Average Rating: {rating ? rating : "No Reviews Yet"} </h3>
            <img className="image" src={carSeat.img} alt="carSeat.id" />
            <div className="description" >
                <p>Expires in {carSeat.expiration} years.</p>
                <p>mode: {carSeat.mode}</p>
                <p>Features: {carSeat.features} </p>
                <p>Approximate Price: ${carSeat.price}</p>
            </div>
            <button onClick={() => navigate(`/carseats/${carSeat.id}/new-review`)}>Add Review</button>
            <button onClick={() => navigate(`/carseats/${carSeat.id}`)}>All Reviews</button>
        </div>
    )

}

export default CarSeatCard