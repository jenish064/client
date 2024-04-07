import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      ErrorPage
      <Button onClick={() => navigate("/")} variant="outlined">
        Go to home page
      </Button>
    </div>
  );
}
