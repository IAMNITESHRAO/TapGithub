import React, { useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const LazyLoadComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    const target = document.querySelector(".lazy-load");
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card className="lazy-load" style={{ height: "300px", background: "#f0f0f0" }}>
      <CardContent>
        <Typography variant="h6">Intersection Observer API</Typography>
        <p>This content will fade in when it comes into view!</p>
      </CardContent>
    </Card>
  );
};

export default LazyLoadComponent;
