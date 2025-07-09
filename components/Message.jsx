import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Stack
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state;

  const handleBack = () => {
    navigate('/br');
  };

  const name = entry?.name || 'Friend';
  const message =
    entry?.message || 'Wishing you a day filled with happiness and a year filled with joy!';
  const fullMessage = `Dear ${name}, ${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);

  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1280&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            boxShadow: 5,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.92)',
          }}

i
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              🎉 Greeting Sent to {name}!
            </Typography>

            <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }} color="text.secondary">
              {fullMessage}
            </Typography>

            <Stack direction="column" spacing={2} mt={4}>
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                href={`https://wa.me/?text=${encodedMessage}`}
                target="_blank"
              >
                Send via WhatsApp
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com"
                target="_blank"
              >
                Share on Instagram
              </Button>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<EmailIcon />}
                href={`mailto:?subject=Happy Birthday&body=${encodedMessage}`}
              >
                Send via Email
              </Button>
            </Stack>

            <Box mt={4}>
              <Button variant="outlined" onClick={handleBack}>
                ⬅ Back to Birthday Reminders
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Message;