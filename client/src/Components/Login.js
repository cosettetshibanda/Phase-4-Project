import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext";
// import SignUpForm from "./SignUpForm";
// import LoginForm from "./LoginForm";
import { ErrorsContext } from "./Context/ErrorsContext";




function Login({loading}){
    const navigate = useNavigate()
    const {loggedIn, loginUser} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)
    // const [showLoginForm, setShowLoginForm] = useState(false)
    // const [showSignupForm, setShowSignupForm] = useState(false)
    // const [showSignupButton, setShowSignupButton] = useState(true)
    // const [showLoginButton, setShowLoginButton] = useState(true)

//    const handleLoginClick = () => {
//     setShowLoginForm((showLoginForm) => !showLoginForm)
//     setShowLoginButton((showLoginButton) => !showLoginButton)
//    }

//    const handleSignupClick = () => {
//     setShowSignupForm((showSignupForm) => !showSignupForm)
//     setShowSignupButton((showButton) => !showButton)
//    }

    useEffect(() => {
        if(!loading && loggedIn) {
            navigate("/")
        }
        return () => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors])

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch("/login", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if(data.errors) {
          setErrors(data.errors);
        } else {
          loginUser(data)
          setErrors([])
          navigate("/")
          }
        })
      };


    return (
        <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Login" />
      </form>
        // <div>
        //     <p className="acountQuestion">
        //      Already have an account?
        //     </p>
        //     {showLoginButton ? <button 
        //          type="button"
        //          onClick={handleLoginClick}>
        //              Log In
        //     </button> :null}
        //     {showLoginForm ? <LoginForm /> : null}
             
        //     <p className="accountQuestion">
        //         Don't have an account? 
        //     </p>
        //     {showSignupButton ? <button 
        //         type="button"
        //         onClick={handleSignupClick} >
        //             Sign Up
        //     </button> : null}
        //     {showSignupForm ? <SignUpForm /> : null}

            
        // </div>
    )
      
}

export default Login