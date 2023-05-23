import React, { useContext } from "react";
import { AuthContext } from '../../contexts/authContext';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(AuthContext)

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addFavouriteMovie(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
