import { Box, Container, Input } from '@mui/material'
import React, { useState } from 'react'
import PostDataService from "./PostService"


const SignUp = () => {
  const initialSignupState ={
    email : "",
    password: "",
    password_confirmation: ""

  };
  const [signup, setSignup] = useState(initialSignupState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignup({ ...signup, [name]: value });
    };
    const userSignup = () => {
      var user = {
      email: signup.email,
      password: signup.password,
      password_confirmation: signup.password_confirmation
  };
    console.log(user);

  PostDataService.signUp(user)
      .then(response => {
        setSignup({
          email: response.user.email,
          password: response.user.password,
          password_confirmation: response.user.password
        });
        console.log(response.user);
      })
      .catch(e => {
        console.log(e);
      });
    };
 
    return (
      <Box>
        <Container sx={{display: 'flex', height:'35%', width: '25%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '20%', left: '40%', backgroundColor:'rgba(0, 0, 0, 0.09)'}}>
          <form>
          <h1>Sign Up</h1>

            <Box className="input-container" sx={{mb: '2rem'}} >
              <label>Email </label>
              <Input value={setSignup.email} onChange={handleInputChange} type="email" name="email" required />
              
            </Box>
            <Box className="input-container" sx={{mb: '2rem'}} >
              <label>Password </label>
              <Input value={setSignup.password} onChange={handleInputChange} type="password" name="password" required />
            </Box>
            <Box className="input-container" sx={{mb: '2rem'}} >
              <label>Password </label>
              <Input value={setSignup.password_confirmation} onChange={handleInputChange} type="password" name="password_confirmation" required />
            </Box>
            <Box className="button-container">
              <Input onClick={userSignup} type="submit" />
            </Box>
          </form>
        </Container>
      </Box>

    )
}

export default SignUp