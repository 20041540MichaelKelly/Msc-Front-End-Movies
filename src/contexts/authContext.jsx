import React, { useState, createContext } from "react";
import { login, signup, addFantasyMovie, addFavourite, addFavouritePerson, addFavouriteTvShow, getUserByEmail, getFavourites } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [favourites, setFavourites] = useState([])


  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }
{
  
}

  const authenticate = async (email2, password) => {
    const result = await login(email2, password);

    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setEmail(email2);
      setUserId(result.userId)
    }
    return result
  };

  const register = async (email, password, firstName, lastName) => {
    const result = await signup(email, password, firstName,lastName);

    console.log(result.code);
    return (result.code == 201) ? true : result;
  };

  const getUserIdByEmail = async (email) => {
    const result = await getUserByEmail(email);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const addFantasyMovies = async (title, time, genres, productionCompany, overView) => {
    const result = await addFantasyMovie(title, time, genres, productionCompany, overView);
    return result
  };

  const addFavouriteMovie = async (movieId) => {
    const result = await addFavourite(userId, movieId);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const getFavouriteMovie = async () => {
    const result = await getFavourites(userId);
    console.log(result.code);
    setFavourites(result)
    return (result.code == 201) ? true : false;
  };

  const addToFavouriteTvShows = async (tvShow) => {
    const result = await addFavouriteTvShow(tvShow);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const addFavouritePeople= async (person) => {
    const result = await addFavouritePerson(person);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setIsAuthenticated(false)
    //setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        getUserIdByEmail,
        addToFavouriteTvShows,
        addFavouriteMovie,
        addFavouritePeople,
        getFavouriteMovie,
        addFantasyMovies,
        email,
        userId,
        favourites
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
