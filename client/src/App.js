import './App.css';
import { useContext, useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { UsersContext, UsersProvider } from './Components/Context/UsersContext';
import CarSeatList from './Components/CarSeatList';
import CarSeatForm from './Components/CarSeatForm';



function App() {

  return (
    <main>
      <UsersProvider>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/carseats/new" element={<CarSeatForm />} />
        <Route path="/carseats" element={<CarSeatList/>} />
      </Routes>
      <CarSeatList />
      </UsersProvider>
    </main>
  );
}

export default App;
