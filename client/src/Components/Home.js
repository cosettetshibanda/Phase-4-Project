import { useContext } from "react";
import { UsersContext } from "./Context/UsersContext";


const Home = () => {
  const {loggedIn} = useContext(UsersContext);

  return (
    <div className='home'>{ loggedIn ? <h3>Welcome! </h3> : <h3>Login or Signup To Get Started!</h3>}</div>
  )
}

export default Home