import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("birthdays")) || [];
    setContacts(stored);
  }, []);

  return (
    <Box p={3} maxWidth={1200} mx="auto">
      <Typography variant="h4" mb={4} textAlign="center" color="primary">
        Saved Contacts
      </Typography>

      <Grid container spacing={3}>
        {contacts.length > 0 ? (
          contacts.map((contact, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    contact.image ||
                    `https://source.unsplash.com/featured/300x300/?person,${contact.name}`
                  }
                  alt={contact.name}
                />
                <CardContent>
                  <Typography variant="h6">{contact.name}</Typography>
                  {contact.jobTitle && (
                    <Typography variant="body2" color="text.secondary">
                      {contact.jobTitle} @ {contact.company}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    📧 {contact.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📞 {contact.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    🎂 {contact.birthday}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {contact.location}
                  </Typography>
                  {contact.notes && (
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      📝 {contact.notes}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 4, width: "100%" }} textAlign="center">
            No contacts saved yet.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Contact;