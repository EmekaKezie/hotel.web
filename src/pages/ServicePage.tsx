import React from "react";
import { Box } from "@mui/material";
import LayoutExplore from "../core/layout/LayoutExplore";
import NavExplore from "../core/navigation/NavExplore";
import ServiceView from "../components/Service/ServiceView";

export default function ServicesPage() {
  return (
    <LayoutExplore>
      <Box>
        <NavExplore />
        <br />
        <ServiceView />
      </Box>
    </LayoutExplore>
  );
}
