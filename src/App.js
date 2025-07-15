import React from "react";
import { Container, Grid, CssBaseline, Box, Typography, Button } from "@mui/material";
import CanvasComponent from "./components/CanvasComponent";
import GeolocationComponent from "./components/GeolocationComponent";
import NetworkInfoComponent from "./components/NetworkInfoComponent";
import LazyLoadComponent from "./components/LazyLoadComponent";
import BackgroundTaskComponent from "./components/BackgroundTaskComponent";
import Navbar from "./components/Navbar";
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
          Smart Web Dashboard
        </Typography>
        <Button onClick={toggleTheme} variant="contained" sx={{ marginBottom: "20px" }}>
          Toggle Dark Mode
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px", borderRadius: "8px" }}>
              <CanvasComponent />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px", borderRadius: "8px" }}>
              <GeolocationComponent />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px", borderRadius: "8px" }}>
              <NetworkInfoComponent />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px", borderRadius: "8px" }}>
              <LazyLoadComponent />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px", borderRadius: "8px" }}>
              <BackgroundTaskComponent />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
