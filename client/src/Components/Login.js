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
                onClick={() => setHaveAccount(false)} >
                    Sign Up
            </button>
            <SignUpForm />
           <p className="acountQuestion">
            Already have an account?
           </p>
           <button 
                type="button"
                onClick={() => setHaveAccount(true)}>
                    Log In
           </button>
           <LoginForm />
            

            
        </div>
    )
      
}

export default Login