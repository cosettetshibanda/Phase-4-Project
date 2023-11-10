import {useState} from "react";


function Login({onLogin}){
    const [isLoading, setIsLoading] = useState 
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        user_name: "",
        password: '',
      });

      useEffect(() => {
        if(!loading && loggedIn) {
            navigate("/")
        }
    
        return () => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors]);
    

      const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
      };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        fetch("/login", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        }
    


    return (
        <div>
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
        </div>
    )
}

export default Login