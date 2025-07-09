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
// Addcon.jsx
import React, { useEffect, useState } from "react";
import {
  Grid, Card, CardContent, CardMedia, Typography, Box,
  Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, TextField, Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Addcon = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedContact, setMatchedContact] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const temp = localStorage.getItem("temp_contact");
    if (temp) {
      const { updatedContact, index } = JSON.parse(temp);
      setContacts((prev) => {
        const updated = [...prev];
        if (index !== null && index !== undefined) {
          updated[index] = updatedContact;
        } else {
          updated.push(updatedContact);
        }
        return updated;
      });
      localStorage.removeItem("temp_contact");
    }
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const index = contacts.findIndex(
        (user) =>
          `${user.name.first} ${user.name.last}`.toLowerCase() ===
          searchTerm.trim().toLowerCase()
      );
      if (index !== -1) {
        setMatchedContact({ ...contacts[index], index });
        setNotFound(false);
      } else {
        setMatchedContact(null);
        setNotFound(true);
      }
    } else {
      setMatchedContact(null);
      setNotFound(false);
    }
  }, [searchTerm, contacts]);

  const handleDeleteClick = (index) => {
    setSelectedContactIndex(index);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    setContacts((prev) => prev.filter((_, i) => i !== selectedContactIndex));
    setOpenDialog(false);
    setSearchTerm("");
    setMatchedContact(null);
  };

  const handleEditClick = (contact, index) => {
    navigate("/a", { state: { contact, index } });
  };

  return (
    <Box p={3} maxWidth={1200} mx="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Contact List</Typography>
        <Box display="flex" gap={2}>
          <TextField
            label="Search by Full Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
          />
          <Button variant="contained" onClick={() => navigate("/a")}>
            Add New
          </Button>
        </Box>
      </Box>

      {notFound && (
        <Typography color="error" mb={2}>
          No contact found with that name.
        </Typography>
      )}

      {matchedContact && (
        <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
          <Typography variant="subtitle1">
            Found: {matchedContact.name.first} {matchedContact.name.last}
          </Typography>
          <Box mt={1} display="flex" gap={2}>
            <Button onClick={() => handleEditClick(matchedContact, matchedContact.index)}>
              Edit
            </Button>
            <Button color="error" onClick={() => handleDeleteClick(matchedContact.index)}>
              Delete
            </Button>
          </Box>
        </Paper>
      )}

      <Grid container spacing={3}>
        {contacts.map((user, idx) => {
          const { name, location, email, phone, picture } = user;
          const fullName = `${name.first} ${name.last}`;
          const address = location?.city || "—";
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card>
                {picture?.large && (
                  <CardMedia component="img" height="200" image={picture.large} />
                )}
                <CardContent>
                  <Typography variant="h6">{fullName}</Typography>
                  <Typography>📍 {address}</Typography>
                  <Typography>📧 {email}</Typography>
                  <Typography>📞 {phone}</Typography>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button onClick={() => handleEditClick(user, idx)}>Edit</Button>
                    <Button color="error" onClick={() => handleDeleteClick(idx)}>Delete</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this contact?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Addcon;
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