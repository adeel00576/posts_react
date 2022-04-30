import { Box, Container, Input, Button } from '@mui/material'

import React, { useState } from 'react'
import PostDataService from "./PostService"


const LogIn = () => {
  
  const initialLogInState ={
    email : "",
    password: ""

  };
  const [login, setLogin] = useState(initialLogInState);

  const handleInputChange = event => { 
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

    const userLogin = (e) => {
      const user = {
        email: login.email,
        password: login.password
      };
       
    PostDataService.signIn(user)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

      e.preventDefault();
    };
    
 
    return (
      <Box>
        <Container sx={{display: 'flex', height:'35%', width: '25%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '20%', left: '40%', backgroundColor:'rgba(0, 0, 0, 0.09)'}}>
          <form onSubmit={userLogin}>
          <h1>Log In</h1>

            <Box className="input-container" sx={{mb: '2rem'}} >
              <label>Username </label>
              <Input value={setLogin.email} onChange={handleInputChange} type="email" name="email" required />
              
            </Box>
            <Box className="input-container" sx={{mb: '2rem'}} >
              <label>Password </label>
              <Input value={setLogin.password} onChange={handleInputChange} type="password" name="password" required />
              
            </Box>
            <Box className="button-container">
              <Button type="submit">Submit</Button>
            </Box>
          </form>
        </Container>
      </Box>

    )
}

export default LogIn