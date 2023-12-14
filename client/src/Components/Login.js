import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom"
import { UsersContext } from "./Context/UsersContext";
// import SignUpForm from "./SignUpForm";
// import LoginForm from "./LoginForm";
import { ErrorsContext } from "./Context/ErrorsContext";




function Login(){
    const navigate = useNavigate()
    const {loginUser} = useContext(UsersContext)
    const {setErrors} = useContext(ErrorsContext)

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
    )
      
}

export default Login