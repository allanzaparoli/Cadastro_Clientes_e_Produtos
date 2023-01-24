import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export function Feedback({
  status, message, open, setFeedback,
}) {
  const SNACKBAR_POSITION = {
    vertical: 'top',
    horizontal: 'right',
  };

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFeedback({ open: false, message: '', status });
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{
          vertical: SNACKBAR_POSITION.vertical,
          horizontal: SNACKBAR_POSITION.horizontal,
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        key={SNACKBAR_POSITION.vertical + SNACKBAR_POSITION.horizontal}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
