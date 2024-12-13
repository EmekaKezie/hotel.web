import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  //Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

type withProps = "xl" | "lg" | "md" | "sm" | "xs";
type props = {
  open: boolean;
  title: string | ReactNode;
  content: ReactNode;
  actions: ReactNode;
  width?: withProps;
  fullscreen?: boolean;
  onClose: () => void;
};

export default function AppDialog(props: props) {
  return (
    <Dialog
      open={props.open}
      maxWidth={!props.width ? "sm" : props.width}
      fullWidth
      fullScreen={props.fullscreen}
      PaperProps={{
        sx: {
          borderRadius: "25px", // Apply the borderRadius here
        },
      }}>
      <Box display="flex" alignItems="center">
        <DialogTitle
          variant="h6"
          color="text"
          sx={{ flexGrow: 1, fontSize: "1.05em", fontWeight: "600" }}>
          {props.title}
        </DialogTitle>
        <Typography padding="0 1rem">
          <IconButton onClick={() => props.onClose()}>
            <CloseOutlined fontSize="small" />
          </IconButton>
        </Typography>
      </Box>
      {/* <Divider /> */}
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>{props.actions}</DialogActions>
    </Dialog>
  );
}
