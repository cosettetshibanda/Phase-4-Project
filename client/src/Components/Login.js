import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";




function Login(){
    const navigate = useNavigate()
    // const {loggedIn, loginUser} = useContext(UsersContext)
    // const {loggedIn, loginUser} = useContext(UsersContext)
    const [haveAccount, setHaveAccount] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignupForm, setShowSignupForm] = useState(false)

   const handleLoginClick = () => {
    setShowLoginForm((showLoginForm) => !showLoginForm)
   }

   const handleSignupClick = () => {
    setShowSignupForm((showSignupForm) => !showSignupForm)
   }
   
    useEffect(() => {
        if(haveAccount) {
            navigate("/login")
        } else {
            navigate("/signup")
        }
    }, [haveAccount, navigate])
    
    return (
        <div>
    
            <p className="accountQuestion">
                Don't have and account? 
            </p>
            <button 
                type="button"
                onClick={handleSignupClick} >
                    Sign Up
            </button>
            {showSignupForm ? <SignUpForm /> : null}
           <p className="acountQuestion">
            Already have an account?
           </p>
           <button 
                type="button"
                onClick={handleLoginClick}>
                    Log In
           </button>
           {showLoginForm ? <LoginForm /> : null}
            

            
        </div>
    )
      
}

export default Login