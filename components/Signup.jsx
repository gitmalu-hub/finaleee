import React, { useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/s', {
        name,
        address,
        phone,
        email,
        password
      });
      alert(response.data.message);  // Show backend success message
      navigate('/login');  // Go to login after successful signup
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://img.freepik.com/free-vector/calling-concept-illustration_114360-3356.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Paper elevation={0} sx={{
        backgroundColor: 'transparent',
        color: '#fff',
        padding: 10,
        width: 320,
        boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
        border: 'none',
        borderRadius: 3,
        backdropFilter: 'none',
        textAlign: 'center'
      }}>
        <Typography variant="h5" align="center" color='black'>
          SIGNUP PAGE
        </Typography>

        <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Address" fullWidth margin="normal" value={address} onChange={(e) => setAddress(e.target.value)} />
        <TextField label="Phone" fullWidth margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }} onClick={handleSignup}>
          SIGNUP
        </Button>
      </Paper>
    </Box>
  );
};

export default Signup;