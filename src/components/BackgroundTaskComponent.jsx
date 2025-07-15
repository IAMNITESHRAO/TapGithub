import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

const BackgroundTaskComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prevProgress + 10, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Background Tasks API</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ marginBottom: "20px" }} />
        <Typography>Task Progress: {progress}%</Typography>
      </CardContent>
    </Card>
  );
};

export default BackgroundTaskComponent;
