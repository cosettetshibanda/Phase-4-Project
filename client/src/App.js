import './App.css';
import { useContext, useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { UsersContext, UsersProvider } from './Components/Context/UsersContext';
import CarSeatList from './Components/CarSeatList';



function App() {

  return (
    <main>
      <UsersProvider>
      <NavBar />
      <CarSeatList />
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </UsersProvider>
    </main>
  );
}

export default App;
