

function CarSeatCard ({carSeat}) {
    return(
        <div>
            <h1>{carSeat.name}</h1>
            <img src={carSeat.img} alt="carSeat.id" />
            <p>Expires in {carSeat.expiration} years.</p>
            <p>Features: {carSeat.features} </p>
            <p>Approximate Price: ${carSeat.price}</p>

        </div>
    )

}

export default CarSeatCard