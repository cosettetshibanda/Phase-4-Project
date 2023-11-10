import {useState} from "react"

function LoginForm({onLogin}) {

    const [formData, setFormData] = useState({
        user_name: "",
        password: '',
      });
    
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
        .then(user => onLogin(user))
      };
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
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm