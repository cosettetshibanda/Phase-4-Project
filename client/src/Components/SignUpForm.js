import React, { useState } from "react";

function SignUpForm({onLogin}) {
    const [formData, setFormData] = useState({
        user_name: "",
        password: '',
        passwordConfirmation: "",
        imageUrl: "",
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
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            }
        })
      }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type="text"
                name="user_name"
                value={formData.user_name}
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
                name="imageUrl"
                value={formData.imageUrl}
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
            <input type="submit" value="Login" />
        </form>
    )
}

export default SignUpForm