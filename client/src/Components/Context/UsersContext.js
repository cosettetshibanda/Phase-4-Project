import React, { useState, useEffect, createContext } from "react";



const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
  


    useEffect(() => {
      fetch("/me")
      .then(response => response.json())
      .then(data => {
        if(!data.errors){
            loginUser(data)
        }
      })
    }, [])


    const loginUser = (user) => {
      setCurrentUser(user)
      setLoggedIn(true)
        
      };
       
      const logoutUser = () => {
        setCurrentUser({});
        setLoggedIn(false);
      };
      

      const addCarSeat = (carseat) => {
        setCurrentUser((prevState) => ({...prevState, carseats: [carseat, ...currentUser.carseats]}))
      }

      const addCarSeatRev = (newReview) => {
        setCurrentUser((prevState) => ({...prevState, reviews: [...currentUser.reviews, newReview]}))
      }

      const removeCarSeat = (deletedCarSeat) => {
        console.log('Before removal:', currentUser.carseats);
        const editedCarSeats = currentUser.carseats.filter((carseat) => carseat.id !== deletedCarSeat.id)
        console.log('Filtered car seats:', editedCarSeats);
        setCurrentUser((prevState) => ({...prevState, carseats: editedCarSeats}))
        console.log('After removal:', currentUser.carseats);
      }

      const updateUserRev = (updatedRev) => {
        const updatedReviews = currentUser.reviews.map((review) => {
          if(review.id === updatedRev.id) {
            return updatedRev
          } else {
            return review
          }
        })
        setCurrentUser(prevState => ({...prevState, reviews: updatedReviews}))
      }
    
  

  
      return(
          <UsersContext.Provider value={{ addCarSeat, addCarSeatRev, removeCarSeat, updateUserRev, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    