import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <Box>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Box>
  );
}
