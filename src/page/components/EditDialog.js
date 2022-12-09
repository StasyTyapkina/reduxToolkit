import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  TextField,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { editItem } from "../../store/listReducer";

export const EditDialog = ({ open, setOpen, item }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(item.name);
    setPhone(item.phone);
  }, [item]);

  const handleEdit = () => {
    if (item.id) {
      dispatch(editItem({ id: item.id, name, phone }));
      clearData();
    }
  };

  const handleClose = () => {
    clearData();
  };

  const clearData = () => {
    setOpen(false);
    setPhone("");
    setName("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Edit contact</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1 }} component="form" noValidate autoComplete="off">
          <TextField
            margin="normal"
            fullWidth
            label="Full name"
            name="name"
            defaultValue={item.name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Phone"
            name="phone"
            defaultValue={item.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ mr: 2 }}>
        <Button
          onClick={handleClose}
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          autoFocus
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleEdit}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
