import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/listReducer";
import { EditDialog } from "./EditDialog";

export const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.phone}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="small"
            onClick={() => dispatch(deleteItem(item.id))}
            color="secondary"
          >
            Delete
          </Button>
          <Button size="small" onClick={() => setOpen(true)} color="secondary">
            Edit
          </Button>
          <EditDialog setOpen={setOpen} open={open} item={item} />
        </CardActions>
      </Card>
    </Grid>
  );
};
