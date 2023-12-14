// import {useContext, useState} from "react"
// import { UsersContext } from "./Context/UsersContext";

// function LoginForm() {
//     const {setCurrentUser} = useContext(UsersContext)

//     const [formData, setFormData] = useState({
//         username: "",
//         password: '',
//       });
    
//       const handleChange = (event) => {
//         setFormData({...formData, [event.target.name]: event.target.value})
//       };
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
    
//         fetch("/login", {
//           method: 'POST',
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(formData)
//         })
//         .then(response => response.json())
//         .then(user => setCurrentUser(user))
//       };


//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Username</label>
//             <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//             />
//             <label>Password</label>
//             <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//             />
//             <input type="submit" value="Login" />
//         </form>
//     )
// }

// export default LoginForm