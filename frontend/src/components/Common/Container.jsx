import { Box } from '@mui/material';

export function Container({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#ecf0f1',
        maxWidth: '600px',
        margin: '100px auto 100px auto',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      {children}
    </Box>
  );
}
