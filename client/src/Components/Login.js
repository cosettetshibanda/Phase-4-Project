import {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom"


function Login({onLogin}){
    const navigate = useNavigate()
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
            <LoginForm onLogin={onLogin} />
            <p className="accountQuestion">
                Don't have and account? 
            </p>
            <button 
                type="button"
                onClick={() => setHaveAccount(false)} >
                    Sign Up
            </button>
           <SignUpForm onLogin={onLogin} />
           <p className="acountQuestion">
            Already have an account?
           </p>
           <button 
                type="button"
                onClick={() => setHaveAccount(true)}>
                    Log In
           </button>
            

            
        </div>
    )
      
}

export default Login