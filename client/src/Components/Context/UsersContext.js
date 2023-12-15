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
        setCurrentUser((prevState) => ({...prevState, carseats: [...currentUser.carseats, newReview]}))
      }

      // const removeCarSeatRev = (deletedReview) => {
      //   setCurrentUser((prevState) => {
      //     const editedReviews = prevState.reviews.filter((review) => review.id !== deletedReview);
      //     return { ...prevState, reviews: editedReviews };
      //   });
      // };

      // const removeCarSeatRev = (deletedReview) => {
      //   const editedReviews = currentUser.reviews.filter((review) => review.id !== deletedReview)
      //   setCurrentUser((prevState) => ({...prevState, reviews: editedReviews}))
        
      // }
      const removeCarSeatRev = (deletedReview) => {
        const editedCarSeats = currentUser.carseats.filter((carseat) => carseat.id !== deletedReview.id)
        setCurrentUser((prevState) => ({...prevState, carseats: editedCarSeats}))
      }

      // const removeCarSeatRev = (deletedReviewId) => {
      //   const updatedReviews = currentUser.reviews.filter((review) => review.id !== deletedReviewId);
      //   const updatedUser = { ...currentUser, reviews: updatedReviews };
      //   setCurrentUser(updatedUser);
      //   console.log('After removal:', updatedUser.reviews);
      // };

      // const removeCarSeatRev = (deletedReviewId) => {
      //   const updatedReviews = currentUser.reviews.filter((review) => {
      //     console.log('Review id:', review.id);
      //     if (review.id === deletedReviewId) {
      //       console.log('Removing review:', review);
      //     }
      //     return review.id !== deletedReviewId;
      //   });
      
      //   const updatedUser = { ...currentUser, reviews: updatedReviews };
      //   setCurrentUser(updatedUser);
        
      //   console.log('After removal:', updatedUser.reviews);
      // };

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
          <UsersContext.Provider value={{ addCarSeat, addCarSeatRev, removeCarSeatRev, updateUserRev, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    