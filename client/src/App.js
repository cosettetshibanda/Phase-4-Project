import './App.css';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';


function App() {
  
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
