import React from "react"
import { useNavigate } from "react-router-dom"

function CarSeatCard ({carSeat}) {
    const navigate = useNavigate()

    return(
        <div>
            <h1>{carSeat.name}</h1>
            <img src={carSeat.img} alt="carSeat.id" />
            <p>Expires in {carSeat.expiration} years.</p>
            <p>Features: {carSeat.features} </p>
            <p>Approximate Price: ${carSeat.price}</p>
            <button onClick={() => navigate(`/carseat/${carSeat.id}/new-review`)}>Add Review</button>
            <button onClick={() => navigate(`/carseat/${carSeat.id}`)}>All Reviews</button>
        </div>
    )

}

export default CarSeatCard