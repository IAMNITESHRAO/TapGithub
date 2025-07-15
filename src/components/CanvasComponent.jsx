import React, { useRef, useEffect } from "react";
import { Typography } from "@mui/material";

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#ff4081";
    ctx.fillRect(50, 50, 200, 100); // Rectangle
    ctx.arc(200, 200, 50, 0, Math.PI * 2); // Circle
    ctx.fill();
  }, []);

  return (
    <div>
      <Typography variant="h6">Canvas API</Typography>
      <canvas ref={canvasRef} width="300" height="300" />
    </div>
  );
};

export default CanvasComponent;
