// import React, { useContext, useState } from "react";
// import {Navigate  } from "react-router-dom";
// import { AuthContext } from '../contexts/authContext';

// const SignUpPage = props => {
//   const context = useContext(AuthContext)
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordAgain, setPasswordAgain] = useState("");
//   const [registered, setRegistered] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const register = () => {
//     if (password.length > 0 && password === passwordAgain) {
//       console.log("reg")
//       context.register(email, password, firstName, lastName);
//       setRegistered(true);
//     }
//   }

//  // const { from } = props.location.state || { from: { pathname: "/" } };

//   if (registered === true) {
//    return <Navigate to="./home" />;
//   }

//   return (
//     <>
//       <h2>SignUp page</h2>
//       <p>You must register an  username and password to log in </p>
//       <input value={email} placeholder="email" onChange={e => {
//         setEmail(e.target.value);
//       }}></input><br />
//       <input value={firstName} placeholder="first name" onChange={e => {
//         setFirstName(e.target.value);
//       }}></input><br />
//       <input value={lastName} placeholder="last name" onChange={e => {
//         setLastName(e.target.value);
//       }}></input><br />
//       <input value={password} type="password" placeholder="password" onChange={e => {
//         setPassword(e.target.value);
//       }}></input><br />
//       <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
//         setPasswordAgain(e.target.value);
//       }}></input><br />
//       {/* Login web form  */}
//       <button onClick={register}>Register</button>
//     </>
//   );
// };

// export default SignUpPage;





import { useState, useContext } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import styles from '../../reviewForm/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../contexts/authContext';

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHappened, setErrorHappened] = useState(false)
  const navigate = useNavigate();
  const context = useContext(AuthContext)

  const handleSnackClose = async (event) => {
    setOpen(false);
    navigate("/");
  }

  const handleErrorClose = async (event) => {
    setErrorHappened(false);
  }

  const validateSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    if (formData.get("password").length > 0 && formData.get("password") === formData.get("passwordAgain")) {
      const result = await context.register(formData.get("email"), formData.get("password"), formData.get("firstName"), formData.get("lastName"));
      if (result.code === 201) {
        navigate(<HomePage />)
        setOpen(true)
      } else {
        setErrorHappened(true)
        setErrorMessage(result)
      }
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={errorHappened}
        onClose={handleErrorClose}
      >
        <Alert severity="error"
          open={errorHappened}
          onClose={handleErrorClose}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleErrorClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          {errorMessage}</Alert>
      </Snackbar>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success"
          open={open}
          onClose={handleSnackClose}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleSnackClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          <Typography variant="h4">
            Thank you for signing up
          </Typography>
        </Alert>
      </Snackbar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={validateSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container direction={"row"}>
          <Grid item xs={6} sx={{ mr: 0 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="first name"
              autoFocus
            />
          </ Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="last name"
              autoFocus
            />
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordAgain"
            label="Password Again"
            type="password"
            id="passwordAgain"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
