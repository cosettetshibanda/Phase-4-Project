import {useState} from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true)
    
    return (
        <div>
            <LoginForm onLogin={onLogin} />
            <p className="accountQuestion">
                Don't have and account? 
            </p>
            <button 
                type="button"
                onClick={() => setShowLogin(false)}>
                    Sign Up
            </button>
           <SignUpForm onLogin={onLogin} />
           <p className="acountQuestion">
            Already have an account?
           </p>
           <button 
                type="button"
                onClick={() => setShowLogin(true)}>
                    Log In
           </button>
            

            
        </div>
    )
      
}

export default Login