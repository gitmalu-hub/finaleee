//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      alert(response.data.message);

      // Optional: Store token or email
      localStorage.setItem("loggedInUser", email);

      // ✅ Set logged-in status in App
      setIsLoggedIn(true);

      // Redirect
      navigate('/v');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  const handleSignup = () => {
    navigate('/s');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          color: '#fff',
          padding: 10,
          width: 320,
          boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
          border: 'none',
          borderRadius: 3,
          backdropFilter: 'none',
          textAlign: 'center',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2609/2609282.png"
          alt="Contact Book"
          style={{ width: '100px', marginBottom: '20px' }}
        />
        <Typography variant="h5" color="black" gutterBottom>
          LOGIN PAGE
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          LOGIN
        </Button>

        <Typography align="center" color="black" sx={{ my: 2 }}>
          OR
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
        >
          CREATE ACCOUNT
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE