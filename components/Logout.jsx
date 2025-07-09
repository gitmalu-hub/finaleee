//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Safely clear only session-related data
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser'); // adjust this key to match your login logic
    sessionStorage.clear();

    // Redirect to login page
    navigate('/login');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {// Overlay }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      />

      {// Logout Card }
      <Paper
        elevation={8}
        sx={{
          width: 360,
          maxWidth: '90vw',
          bgcolor: 'white',
          p: 5,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          margin: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
          alt="Logout Icon"
          style={{ width: 100, marginBottom: 24 }}
        />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: '600', color: '#1976d2' }}>
          Log Out
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          Are you sure you want to logout?
        </Typography>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ py: 1.5, fontWeight: '600' }}
          onClick={handleLogout}
        >
          Confirm Logout
        </Button>

        <Button
          variant="text"
          fullWidth
          sx={{ mt: 2, fontWeight: '500', color: '#1976d2' }}
          onClick={() => navigate(-1)} // Go back
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default Logout;
*/

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    sessionStorage.clear();

    navigate('/'); // Redirect to login page
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      />

      <Paper
        elevation={8}
        sx={{
          width: 360,
          maxWidth: '90vw',
          bgcolor: 'white',
          p: 5,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          margin: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
          alt="Logout Icon"
          style={{ width: 100, marginBottom: 24 }}
        />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: '600', color: '#1976d2' }}>
          Log Out
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          Are you sure you want to logout?
        </Typography>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ py: 1.5, fontWeight: '600' }}
          onClick={handleLogout}
        >
          Confirm Logout
        </Button>

        <Button
          variant="text"
          fullWidth
          sx={{ mt: 2, fontWeight: '500', color: '#1976d2' }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default Logout;
*/


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
  const userEmail = localStorage.getItem('loggedInUser');
  
  localStorage.removeItem('loggedInUser');          // required
  sessionStorage.clear();
  navigate('/login');
};
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      />

     
      <Paper
        elevation={8}
        sx={{
          width: 360,
          maxWidth: '90vw',
          bgcolor: 'white',
          p: 5,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          margin: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
          alt="Logout Icon"
          style={{ width: 100, marginBottom: 24 }}
        />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: '600', color: '#1976d2' }}>
          Log Out
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          Are you sure you want to logout?
        </Typography>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ py: 1.5, fontWeight: '600' }}
          onClick={handleLogout}
        >
          Confirm Logout
        </Button>

        <Button
          variant="text"
          fullWidth
          sx={{ mt: 2, fontWeight: '500', color: '#1976d2' }}
          onClick={() => navigate(-1)} // Go back
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default Logout;