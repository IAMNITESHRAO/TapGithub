import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NetworkInfoComponent = () => {
  const [networkType, setNetworkType] = useState(null);

  useEffect(() => {
    const updateNetworkInfo = () => {
      setNetworkType(navigator.connection?.effectiveType || "Unknown");
    };

    updateNetworkInfo();
    window.addEventListener("online", updateNetworkInfo);
    window.addEventListener("offline", updateNetworkInfo);

    return () => {
      window.removeEventListener("online", updateNetworkInfo);
      window.removeEventListener("offline", updateNetworkInfo);
    };
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Network Information API</Typography>
        <Typography>Network Type: {networkType}</Typography>
      </CardContent>
    </Card>
  );
};

export default NetworkInfoComponent;
