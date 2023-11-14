// import { NavLink} from "react-router-dom";

function NavBar({ user, setUser}) {
    const handleLogoutClick = () => {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if(r.ok) {
                setUser(null)
            }
        })
    }
    return (
        <div>
            <h1>Find the Best Carseat For You!</h1>
            <button 
                 type="button" onClick={handleLogoutClick}>
                     Log Out
            </button>
        </div>

    )
}

export default NavBar