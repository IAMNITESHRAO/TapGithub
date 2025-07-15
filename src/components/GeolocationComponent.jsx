import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const GeolocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });

        // Fetch weather data
        const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeather API key
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
      });
    }
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Geolocation API</Typography>
        {location ? (
          <>
            <Typography>
              Latitude: {location.lat}, Longitude: {location.lon}
            </Typography>
            {/* Check if weather data exists before trying to access it */}
            {weather ? (
              <Box sx={{ marginTop: "16px" }}>
                {/* Use optional chaining to safely access weather data */}
                <Typography>Weather: {weather.weather?.[0]?.description}</Typography>
                <Typography>Temperature: {weather.main?.temp}°C</Typography>
              </Box>
            ) : (
              <Typography>Loading weather data...</Typography>
            )}
          </>
        ) : (
          <Typography>Loading location...</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default GeolocationComponent;
