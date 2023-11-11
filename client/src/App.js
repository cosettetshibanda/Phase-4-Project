import './App.css';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login />



  return (
    <main>
      <NavBar />
      {/* <Routes>
        <Route path="/login" element={<LoginForm onLogin={setUser}/>} />
        <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
      </Routes> */}
    </main>
  );
}

export default App;
