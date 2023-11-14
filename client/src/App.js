import './App.css';
import { useContext, useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { UsersContext, UsersProvider } from './Components/Context/UsersContext';



function App() {

  return (
    <main>
      <UsersProvider>
      <NavBar />
      {/* <Routes>
        <Route path="/login" element={<LoginForm onLogin={setUser}/>} />
        <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
      </Routes> */}
      </UsersProvider>
    </main>
  );
}

export default App;
