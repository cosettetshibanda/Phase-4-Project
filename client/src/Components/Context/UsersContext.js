import React, { useState, useEffect, createContext } from "react";
// import { useNavigate } from "react-router-dom";


const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    // const {setLoading} = useContext(ErrorsContext)


    useEffect(() => {
      fetch("/me")
      .then(response => response.json())
      .then(data => {
        if(!data.errors){
            setCurrentUser(data)
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



    const loginUser = () => {
        if(currentUser) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false)
        }
      };
       
      const logoutUser = () => {
        setCurrentUser({});
        setLoggedIn(false);
      };
      
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
  
//       const updateUserDeletedReviews = (deletedReview) => {
//         const userToUpdate = users?.find(user => user.id === deletedReview.user_id)
//         const updatedUserReviews = userToUpdate.reviews?.filter((review) => review.id !== deletedReview.id)
//         const updatedUser = {
//           ...userToUpdate,
//           reviews: updatedUserReviews
//         }
//         const updatedUsersState = users.map(user => {
//           if(user.id === updatedUser.id) {
//             return updatedUser
//           } else {
//             return user
//           }
//         })
//         setUsers(updatedUsersState)
//       };
  
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
          <UsersContext.Provider value={{ users, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    