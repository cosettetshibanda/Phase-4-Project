import { Link,} from "react-router-dom";

import { useContext } from "react"
import { UsersContext } from "./Context/UsersContext"
import Login from "./Login";
import CarSeatCard from "./CarSeatCard";
import CarSeatList from "./CarSeatList";

function NavBar() {

    const {setCurrentUser, currentUser} = useContext(UsersContext)

    const handleLogoutClick = () => {
        fetch("/logout", {method: "DELETE"})
        .then((r) => setCurrentUser(null))
    }

    const loggedInLinks = () => {
        return(
          <>
            <li><Link to="/carseats/new">Add Car Seat</Link></li>
            <li><Link to="mycarseats">My Car Seats</Link></li> 
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="#" onClick={handleLogoutClick}>Logout</Link></li>
            {/* <CarSeatList /> */}
          </>
        )
      }
    
      const loggedOutLinks = () => {
        return(
          <Login />
        )
      }
    


    return (
        <div>
            <h1>Find the Best Car Seat For You!</h1>
            <ul>
          { currentUser ? loggedInLinks() : loggedOutLinks() }
        </ul>
        </div>

    )
}

export default NavBar