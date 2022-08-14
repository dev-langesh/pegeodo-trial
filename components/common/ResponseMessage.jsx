import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function ResponseMessage({
  message,
  error,
  handleSnackBarOnClose,
}) {
  return (
    <>
      <Snackbar open={message ? true : false} autoHideDuration={6000}>
        <Alert
          onClose={handleSnackBarOnClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Snackbar open={error ? true : false} autoHideDuration={6000}>
        <Alert
          onClose={handleSnackBarOnClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
