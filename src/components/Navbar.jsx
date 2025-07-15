import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppBarStyled = styled(AppBar)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  background: "linear-gradient(135deg, #6f42c1, #5a189a)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
});

const NavLinks = styled(Box)({
  display: "flex",
  gap: "20px",
});

const NavLink = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#ff4081",
  },
});

const Navbar = () => {
  return (
    <AppBarStyled>
      <ToolbarStyled>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Smart Web Dashboard
        </Typography>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Features</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Navbar;
