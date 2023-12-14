import './App.css';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { UsersProvider } from './Components/Context/UsersContext';
import CarSeatList from './Components/CarSeatList';
import CarSeatForm from './Components/CarSeatForm';
import { CarSeatProvider } from './Components/Context/CarSeatContext';
import Errors from './Components/Errors';
import Home from './Components/Home';
import CarSeatReviews from './Components/CarSeatReviews';
import { ErrorsProvider } from './Components/Context/ErrorsContext';
import UserCarSeats from './Components/UserCarSeats';
import ReviewForm from './Components/ReviewForm';
import SignUpForm from './Components/SignUpForm';



function App() {



  return (
    <main>
      <ErrorsProvider >
        <UsersProvider>
            <CarSeatProvider >
              <NavBar />
              <Errors />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpForm />} /> 
                <Route path="/carseats/:carseat_id" element={<CarSeatReviews />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/carseats" element={<CarSeatList/>} />
                <Route path="/carseats/new" element={<CarSeatForm />} />
                <Route path="/mycarseats" element={<UserCarSeats />} />
                <Route path="/carseats/:id/new-review" element={<ReviewForm />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUpForm />} />
              </Routes>
            </CarSeatProvider>
        </UsersProvider>
      </ErrorsProvider>
    </main>
  );
}

export default App;
