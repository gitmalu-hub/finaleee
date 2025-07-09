//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid, Card, CardContent, CardMedia, Typography,
  Button, CardActions, Container, Box
} from '@mui/material';

const STORAGE_KEY = 'myContacts';

const BirthdayRemainder = () => {
  const [contactsWithBirthdays, setContactsWithBirthdays] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allContacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const filtered = allContacts
      .filter(contact => contact.birthday)
      .map(contact => {
        let dateStr = '';

        try {
          const parsedDate = new Date(contact.birthday);
          if (!isNaN(parsedDate)) {
            dateStr = parsedDate.toLocaleDateString('en-CA'); // "YYYY-MM-DD"
          }
        } catch {
          dateStr = '';
        }

        return {
          name: contact.name,
          date: dateStr,
          image: contact.imagePreviewUrl || '',
          message: `Happy Birthday, ${contact.name}! 🎉`
        };
      });

    setContactsWithBirthdays(filtered);
    setFilteredData(filtered);
  }, []);

  const handleSearch = () => {
    if (!searchName && !searchDate) {
      setFilteredData(contactsWithBirthdays);
      return;
    }

    const results = contactsWithBirthdays.filter(entry => {
      const matchesDate = searchDate
        ? entry.date === new Date(searchDate).toLocaleDateString('en-CA')
        : false;

      const matchesName = searchName
        ? entry.name.toLowerCase().includes(searchName.toLowerCase())
        : false;

      return matchesDate || matchesName;
    });

    setFilteredData(results);
  };

  const handleSendGreeting = (entry) => {
    navigate('/Message', { state: entry });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-IAi52ztS18g1Xx31GJtBzW_lsA0V_Fagw&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 5
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 4,
          py: 4,
          px: 3
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'navy' }}>
          𝐵𝒾𝓇𝓉𝒽𝒹𝒶𝓎 𝑅𝑒𝓂𝒾𝓃𝒹𝑒𝓇 🗓️
        </Typography>

        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{
            marginBottom: '0.8rem',
            padding: '0.6rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '1rem'
          }}
        />

        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          style={{
            marginBottom: '0.8rem',
            padding: '0.6rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '1rem'
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
          sx={{ mb: 3 }}
        >
          Enter
        </Button>

        <Grid container spacing={4} justifyContent="center">
          {filteredData.length > 0 ? (
            filteredData.map((entry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 6 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={entry.image || 'https://via.placeholder.com/200x200?text=No+Image'}
                    alt={entry.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">{entry.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {entry.message}
                    </Typography>
                    <Typography variant="caption" display="block" mt={1}>
                      📅 {entry.date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleSendGreeting(entry)}
                    >
                      Send Greetings
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ mt: 2, width: '100%' }}>
              No birthdays found. Please search by name or date of birth.
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default BirthdayRemainder;
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE