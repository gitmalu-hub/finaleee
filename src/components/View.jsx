//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
// View.jsx
// GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
// GOD IS LOVE
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Paper,
  Avatar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import './View.css'; // 👈 Import the CSS

const STORAGE_KEY = "myContacts";

const View = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedContact, setMatchedContact] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const newContact = location.state?.contact || null;

  useEffect(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      setContacts(savedContacts);
    } catch (e) {
      console.error("Failed to load contacts", e);
    }
  }, []);

  useEffect(() => {
    if (newContact) {
      const contactWithId = {
        ...newContact,
        id: newContact.id || Date.now(),
      };

      setContacts((prev) => {
        const exists = prev.some((c) => c.id === contactWithId.id);
        const updatedContacts = exists
          ? prev.map((c) => (c.id === contactWithId.id ? contactWithId : c))
          : [contactWithId, ...prev];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContacts));
        return updatedContacts;
      });
    }
  }, [newContact]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const index = contacts.findIndex((contact) =>
        contact.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
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
    setContacts((prev) => {
      const updated = prev.filter((_, i) => i !== selectedContactIndex);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    setOpenDialog(false);
    setSelectedContactIndex(null);
    setMatchedContact(null);
    setSearchTerm("");
  };

  const handleEditClick = (contact) => {
    navigate("/a", { state: { contact } });
  };

  return (
    <div className="view-background"> {/* 👈 Background wrapper */}
      <Box p={3} maxWidth={1200} mx="auto">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" color="white">My Contacts</Typography>
          <TextField
            label="Search by Full Name for Edit/Delete"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
          />
        </Box>

        {notFound && (
          <Typography color="error" mb={2}>
            No contact found with that name.
          </Typography>
        )}

        {matchedContact && (
          <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
            <Typography variant="subtitle1">Found: {matchedContact.name}</Typography>
            <Box mt={1} display="flex" gap={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEditClick(matchedContact)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteClick(matchedContact.index)}
              >
                Delete
              </Button>
            </Box>
          </Paper>
        )}

        <Grid container spacing={3}>
          {[...contacts].sort((a, b) => a.name.localeCompare(b.name)).map((contact, idx) => (
            <Grid item xs={12} sm={6} md={4} key={contact.id || idx}>
              <Card>
                <Box
                  height="200px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#eee"
                >
                  {contact.imagePreviewUrl ? (
                    <img
                      src={contact.imagePreviewUrl}
                      alt={contact.name}
                      style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <Avatar sx={{ width: 100, height: 100 }}>
                      {contact.name.charAt(0)}
                    </Avatar>
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h6">{contact.name}</Typography>

                  {contact.birthday && !isNaN(new Date(contact.birthday)) && (
                    <Typography variant="body2" color="text.secondary">
                      Birthday: {new Date(contact.birthday).toLocaleDateString()}
                    </Typography>
                  )}

                  <Typography variant="body2" color="text.secondary">
                    Job Title: {contact.jobTitle || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: {contact.company || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {contact.location || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Groups: {contact.groups?.join(", ") || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Habits: {contact.habits?.join(", ") || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Notes: {contact.notes || "N/A"}
                  </Typography>

                  {contact.socialLinks && Object.keys(contact.socialLinks).length > 0 && (
                    <>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Social Links:
                      </Typography>
                      {Object.entries(contact.socialLinks).map(([platform, url]) =>
                        url ? (
                          <Typography
                            key={platform}
                            variant="body2"
                            color="primary"
                            sx={{ ml: 1 }}
                          >
                            {platform}: {url}
                          </Typography>
                        ) : null
                      )}
                    </>
                  )}

                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditClick(contact)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteClick(idx)}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Delete Contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this contact?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default View;
// GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
// GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE