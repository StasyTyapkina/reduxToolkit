import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const CToolbar = ({ title }) => {
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "secondary.main",
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
