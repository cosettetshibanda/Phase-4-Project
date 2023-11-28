import React from "react"
import { useNavigate } from "react-router-dom"

function CarSeatCard ({carSeat}) {
    const navigate = useNavigate()

    const rating = carSeat.reviews.map(review => review.stars).reduce((a, b) => a + b, 0)/carSeat.reviews.length

    return(
        <div>
            <h1>{carSeat.name}</h1>
            <h2>Average Rating: {rating ? rating : "No Reviews Yet"} </h2>
            <img src={carSeat.img} alt="carSeat.id" />
            <p>Expires in {carSeat.expiration} years.</p>
            <p>mode: {carSeat.mode}</p>
            <p>Features: {carSeat.features} </p>
            <p>Approximate Price: ${carSeat.price}</p>
            <button onClick={() => navigate(`/carseats/${carSeat.id}/new-review`)}>Add Review</button>
            <button onClick={() => navigate(`/carseats/${carSeat.id}`)}>All Reviews</button>
        </div>
    )

}

export default CarSeatCard