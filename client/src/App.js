import './App.css';
import { useContext, useEffect, useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { UsersContext, UsersProvider } from './Components/Context/UsersContext';
import CarSeatList from './Components/CarSeatList';
import CarSeatForm from './Components/CarSeatForm';
import { ReviewsProvider } from './Components/Context/ReviewsContext';
import { CarSeatProvider } from './Components/Context/CarSeatContext';
import Errors from './Components/Errors';
import Home from './Components/Home';
import CarSeatReviews from './Components/CarSeatReviews';
import { ErrorsProvider } from './Components/Context/ErrorsContext';
import UserCarSeats from './Components/UserCarSeats';
import ReviewsList from './Components/ReviewsList';
import ReviewEdit from './Components/ReviewEdit';



function App() {
  const [loading, setLoading] = useState(true)


  return (
    <main>
      <ErrorsProvider loading={loading} setLoading={setLoading}>
        <UsersProvider>
          <ReviewsProvider >
            <CarSeatProvider >
              <NavBar />
              <Errors />
              {loading ? <h1>Loading... </h1> : <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carseats" element={<CarSeatList/>} />
                <Route path="/carseats/:carseat_id" element={<CarSeatReviews />} />
                <Route path="/carseats/new" element={<CarSeatForm />} />
                <Route path="/mycarseats" element={<UserCarSeats />} />
                <Route path="/reviews" element={<ReviewsList />} />
                <Route path="/reviews/:id/edit" element={<ReviewEdit />}/>
                <Route path="/books/:id/new-review" element={<ReviewForm  />} />
                <Route path="/login" element={<Login/>} />
              </Routes>}
            </CarSeatProvider>
          </ReviewsProvider>
        </UsersProvider>
      </ErrorsProvider>
    </main>
  );
}

export default App;
