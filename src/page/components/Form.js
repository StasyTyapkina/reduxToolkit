import React, { useState } from "react";
import { Button, Box, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../store/listReducer";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (name && phone) {
      dispatch(
        addNewItem({
          id: nanoid(),
          name,
          phone,
        })
      );
      setPhone("");
      setName("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3 }} component="form" noValidate autoComplete="off">
        <TextField
          margin="normal"
          fullWidth
          label="Full name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Add contact
        </Button>
      </Box>
    </Container>
  );
};
