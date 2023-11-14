import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";




function Login(){
    const navigate = useNavigate()
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignupForm, setShowSignupForm] = useState(false)
    const [showSignupButton, setShowSignupButton] = useState(true)
    const [showLoginButton, setShowLoginButton] = useState(true)

   const handleLoginClick = () => {
    setShowLoginForm((showLoginForm) => !showLoginForm)
    setShowLoginButton((showLoginButton) => !showLoginButton)
   }

   const handleSignupClick = () => {
    setShowSignupForm((showSignupForm) => !showSignupForm)
    setShowSignupButton((showButton) => !showButton)
   }

    return (
        <div>
            <p className="acountQuestion">
             Already have an account?
            </p>
            {showLoginButton ? <button 
                 type="button"
                 onClick={handleLoginClick}>
                     Log In
            </button> :null}
            {showLoginForm ? <LoginForm /> : null}
             
            <p className="accountQuestion">
                Don't have an account? 
            </p>
            {showSignupButton ? <button 
                type="button"
                onClick={handleSignupClick} >
                    Sign Up
            </button> : null}
            {showSignupForm ? <SignUpForm /> : null}

            
        </div>
    )
      
}

export default Login