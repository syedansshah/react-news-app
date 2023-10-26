import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../../Context/TokenContext';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useToken(); // Get the setToken function from the context

  // const history = useHistory();

  const handleLogin = async () => {
    try {
      // Send a POST request to your backend API
      const data = {
        email: email,
        password: password
      }
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/login`,data);
      console.log('login response', response)
      if (response.status === 200) {
        const token = response.data.token;
        setToken(token); // Store the token in the context
        // Redirect or navigate to another page
        window.location.href = '/feed';
        // history.push('/newsfeed');
      }
    } catch (error) {
      console.error('login failed:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4" align="center">Login</Typography>

        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => setemail(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => handleLogin()}
          style={{ marginTop: '20px' }}
        >
          Log In
        </Button>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
