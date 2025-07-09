import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp6723603.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            /*backgroundColor: '#ffffffcc', // Light semi-transparent white*/
            backdropFilter: 'blur(4px)',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            About Contact Book App
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Contact Book App is your digital assistant for managing and organizing your contacts securely and efficiently.
            Designed for all types of users, it offers a sleek and intuitive interface that works seamlessly across devices.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Whether you're an individual keeping personal contacts, or an admin managing an organization's contact list,
            our app gives you the tools to add, edit, view, and delete contacts with ease.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Built using modern web technologies like <strong>React</strong>, <strong>Vite</strong>, and <strong>Material UI</strong>,
            the app ensures fast performance and a smooth user experience.
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, color: '#333' }}>
            📌 Key Highlights:
          </Typography>
          <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>🛡️ Secure Login and Role-Based Access</li>
            <li>📇 Easy Contact CRUD Operations</li>
            <li>📱 Mobile-Friendly Responsive Design</li>
            <li>📊 Admin Panel for User & Contact Management</li>
            <li>🔍 Search, Sort, and Filter Contacts</li>
          </ul>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;