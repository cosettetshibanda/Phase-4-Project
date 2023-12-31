import React, { useContext, useState } from "react";
import { UsersContext } from "./Context/UsersContext";
import { useNavigate } from "react-router-dom";
// import { ErrorsContext } from "./Context/ErrorsContext";

function SignUpForm() {
    const navigate = useNavigate()
    // const {setErrors} = useContext(ErrorsContext)
    const { loginUser } = useContext(UsersContext)
    const [errors, setErrors] = useState()
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)



    const [formData, setFormData] = useState({
        username: "",
        password: '',
        password_confirmation: "",
        image_url: "",
        bio: "",
      });


      const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
      };

      const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                loginUser(data)
                navigate("/")
                setErrors([])
                }
        })
      }

    return (
        <div>
            {errorsList}
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
            <label>Password Confirmation</label>
            <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
            />
            <label>Profile Image</label>
            <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                required
            />
            <label>Bio</label>
            <input
                type="test"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
            />
            <input type="submit" value="Sign Up" />
        </form>
        </div>
    )
}

export default SignUpForm