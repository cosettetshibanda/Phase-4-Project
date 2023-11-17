import { useContext } from "react";
import { UsersContext } from "./Context/UsersContext";


const Home = () => {
  const {loggedIn} = useContext(UsersContext);

  return (
    <div className='home'>{ loggedIn ? <h3>Welcome. Discover car seats you might be interested in buying. And review car seats you have already bought.</h3> : <h3>Login or Signup To Get Started!</h3>}</div>
  )
}

export default Home