import {useState} from "react";
import LoginForm from "./LoginForm";


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
                onClick={() => setShowLogin(false)}
            >
                    Sign Up
            </button>
            
            

            
        </div>
    )
      
}

export default Login