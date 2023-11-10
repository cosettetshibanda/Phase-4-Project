import './App.css';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />;



  return (
    <main>
      <Routes>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
