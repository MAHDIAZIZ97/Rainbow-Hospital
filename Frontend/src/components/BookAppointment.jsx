import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Container,
  Box,
} from "@mui/material";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    date: "",
    gender: "",
    doctor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: "100%", md: "70%" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: 2,
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Mobile"
          name="mobile"
          type="number"
          value={formData.mobile}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={3}
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth required>
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel>Doctor</InputLabel>
          <Select name="doctor" value={formData.doctor} onChange={handleChange}>
            <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
            <MenuItem value="Dr. John">Dr. John</MenuItem>
            <MenuItem value="Dr. Mary">Dr. Mary</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default BookAppointment;
