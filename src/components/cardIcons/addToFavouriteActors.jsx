import React, { useContext } from "react";
import { AuthContext } from '../../contexts/authContext';
import IconButton from "@mui/material/IconButton";
import AddReactionIcon from '@mui/icons-material/AddReaction';

const AddToFavouriteActorsIcon = ({ actor }) => {
  const context = useContext(AuthContext);
 


  const onUserSelect = (e) => {
    e.preventDefault();
    context.addFavouritePeople(actor);
  };
  
  return (
    <IconButton aria-label="add actor to favorites" onClick={onUserSelect}>
      <AddReactionIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteActorsIcon;