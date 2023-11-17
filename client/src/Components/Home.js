import { useContext } from "react";
import { UsersContext } from "./Context/UsersContext";


const Home = () => {
  const {loggedIn} = useContext(UsersContext);

  return (
    <div className='home'>{ loggedIn ? <h3>Welcome! Discover car seats that will keep your children safe and work best in your family. Please leave reviews on car seats you have already bought so that others can learn from your experience.</h3> : <h3>Login or Signup To Get Started!</h3>}</div>
  )
}

export default Home