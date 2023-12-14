import React, { useState, useEffect, createContext } from "react";
// import { useNavigate } from "react-router-dom";


const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    // const {setLoading} = useContext(ErrorsContext)


    useEffect(() => {
      fetch("/me")
      .then(response => response.json())
      .then(data => {
        if(!data.errors){
            loginUser(data)
        }
      })
    }, [])


    // useEffect(() => {
    //     fetch("/users")
    //     .then(response => response.json())
    //     .then(data => {
    //       if(!data.errors) {
    //         setUsers(data)
    //       }
    //       setLoading(false)
    //     })
    //   }, [loggedIn, setLoading])



    const loginUser = (user) => {
      setCurrentUser(user)
      setLoggedIn(true)
        // if(currentUser) {
        //     setLoggedIn(true);
        // } else {
        //     setLoggedIn(false)
        // }
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
    //   const updateUserReviews = (updatedReview) => {
    //     const userToUpdate = users?.find(user => user.id === updatedReview.user_id)
    //     const updatedUserReviews = userToUpdate.reviews?.map(review => {
    //       if(review.id === updatedReview.id) {
    //         return updatedReview;
    //       } else {
    //         return review;
    //       }
    //     })
      
    //     const updatedUser = {
    //       ...userToUpdate,
    //       reviews: updatedUserReviews
    //     }
    //     const updatedUsersState = users.map(user => {
    //       if(user.id === updatedUser.id) {
    //         return updatedUser
    //       } else {
    //         return user
    //       }
    //     })
    //     setUsers(updatedUsersState)
    //   }
  
      // const updateUserDeletedReviews = (deletedReview) => {
      //   const userToUpdate = users?.find(user => user.id === deletedReview.user_id)
      //   const updatedUserReviews = userToUpdate.reviews?.filter((review) => review.id !== deletedReview.id)
      //   const updatedUser = {
      //     ...userToUpdate,
      //     reviews: updatedUserReviews
      //   }
      //   const updatedUsersState = users.map(user => {
      //     if(user.id === updatedUser.id) {
      //       return updatedUser
      //     } else {
      //       return user
      //     }
      //   })
      //   setUsers(updatedUsersState)
      // };
  
//       const updateUserAddedReviews = (addedReview) => {
//         const userToUpdate = users?.find(user => user.id === addedReview.user_id)
//         const updatedUser = {
//           ...userToUpdate,
//           reviews: [...userToUpdate.reviews, addedReview]
//         }
//         const updatedUsersState = users?.map(user => {
//           if(user.id === updatedUser.id) {
//             return updatedUser
//           } else {
//             return user
//           }
//         })
//         setUsers(updatedUsersState)
//       };
  
  

  
      return(
          <UsersContext.Provider value={{ addCarSeat, addCarSeatRev, removeCarSeat, updateUserRev, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    