
function NavBar({ user, setUser}) {
    const handleLogoutClick = () => {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if(r.ok) {
                setUser(null)
            }
        })
    }
    return (
        <div></div>

    )
}

export default NavBar