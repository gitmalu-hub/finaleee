//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
// GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
// Add.jsx
// GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  OutlinedInput,
  Stack,
  Avatar,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PhotoCamera } from "@mui/icons-material";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";

import "./Add.css";

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const groups = ["Family", "Friends", "Work", "Gym", "School"];
const habits = ["Reading", "Traveling", "Gaming", "Cooking", "Sports"];
const socialPlatforms = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contactToEdit = location.state?.contact || null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    birthday: null,
    location: "",
    groups: [],
    habits: [],
    notes: "",
    socialLinks: {},
    image: null,
    imagePreviewUrl: null,
  });

  useEffect(() => {
    if (contactToEdit) {
      setFormData({
        ...contactToEdit,
        birthday: contactToEdit.birthday ? dayjs(contactToEdit.birthday) : null,
      });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (name) => (event) => {
    const {
      target: { value },
    } = event;
    setFormData((prev) => ({
      ...prev,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleBirthdayChange = (newDate) => {
    setFormData((prev) => ({ ...prev, birthday: newDate }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreviewUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactToSave = {
      ...formData,
      birthday: formData.birthday ? formData.birthday.toDate().toISOString() : null, // <-- FIXED
    };
    navigate("/v", { state: { contact: contactToSave } });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="add-container-background">
  <div style={{ maxWidth: 900, width: "100%", margin: "auto" }}>
          <Typography variant="h4" gutterBottom align="center">
            {contactToEdit ? "Edit Contact" : "Add New Contact"}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar
                  src={formData.imagePreviewUrl}
                  alt="Contact"
                  sx={{ width: 160, height: 160, mb: 2, border: "2px solid #1976d2" }}
                >
                  {!formData.imagePreviewUrl && (
                    <Typography variant="h6" color="text.secondary">
                      No Image
                    </Typography>
                  )}
                </Avatar>
                <label htmlFor="upload-image">
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-image"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <Button variant="contained" component="span" startIcon={<PhotoCamera />}>
                    {formData.image ? "Change Photo" : "Upload Photo"}
                  </Button>
                </label>
              </Grid>

              <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Job Title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      label="Birthday"
                      value={formData.birthday}
                      onChange={handleBirthdayChange}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="location-label">Location</InputLabel>
                      <Select
                        labelId="location-label"
                        name="location"
                        value={formData.location}
                        label="Location"
                        onChange={handleChange}
                      >
                        {locations.map((loc) => (
                          <MenuItem key={loc} value={loc}>
                            {loc}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="groups-label">Groups</InputLabel>
                      <Select
                        multiple
                        labelId="groups-label"
                        value={formData.groups}
                        onChange={handleMultiSelectChange("groups")}
                        input={<OutlinedInput label="Groups" />}
                        renderValue={(selected) => (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                      >
                        {groups.map((group) => (
                          <MenuItem key={group} value={group}>
                            {group}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="habits-label">Habits</InputLabel>
                      <Select
                        multiple
                        labelId="habits-label"
                        value={formData.habits}
                        onChange={handleMultiSelectChange("habits")}
                        input={<OutlinedInput label="Habits" />}
                        renderValue={(selected) => (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                      >
                        {habits.map((habit) => (
                          <MenuItem key={habit} value={habit}>
                            {habit}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" mb={1}>
                      Social Media Links
                    </Typography>
                    <Stack spacing={2}>
                      {socialPlatforms.map((platform) => (
                        <TextField
                          key={platform}
                          label={platform}
                          value={formData.socialLinks[platform] || ""}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              socialLinks: {
                                ...prev.socialLinks,
                                [platform]: value,
                              },
                            }));
                          }}
                          fullWidth
                        />
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="notes-textarea"
                      label="Additional Notes"
                      name="notes"
                      multiline
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="submit-button" variant="contained" type="submit" fullWidth>
                      {contactToEdit ? "Update Contact" : "Save Contact"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Add;
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
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
//GOD IS LOVE