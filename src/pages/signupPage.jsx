// import { useState } from 'react';
// import { supabase } from '../supabaseClient';
// import Container from "@mui/material/Container";
// import Alert from '@mui/material/Alert';
// import SignUpForm from '../components/userAccount/signUpForm';
// import SuccessAlert from '../components/alerts/successAlert'

// export default function SignUp() {
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')
//   const errorMessage = "";


//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     const formData = new FormData(event.currentTarget);
  
//     const { data, error } = await supabase.auth.signUp(
//         {
//           email: formData.get("email"),
//           password: formData.get("password"),
//           options: {
//             data: {
//               first_name: formData.get("firstName"),
//               last_name: formData.get("last_name")
//             }
//           }
//         }
//       )

//     if (error) {
//         alert(error.message)
//     } else {
//         return <SuccessAlert />;
//     }
//    setLoading(false)
// }

//   return (
//     <Container component="main" maxWidth="xs">
//       <SignUpForm />
    
//     </Container>
//   );
// };

import React, { useContext, useState } from "react";
import {Navigate  } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      console.log("reg")
      context.register(email, password, firstName, lastName);
      setRegistered(true);
    }
  }

 // const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
   return <Navigate to="./home" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register an  username and password to log in </p>
      <input value={email} placeholder="email" onChange={e => {
        setEmail(e.target.value);
      }}></input><br />
      <input value={firstName} placeholder="first name" onChange={e => {
        setFirstName(e.target.value);
      }}></input><br />
      <input value={lastName} placeholder="last name" onChange={e => {
        setLastName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;

