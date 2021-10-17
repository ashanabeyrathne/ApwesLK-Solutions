import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Stack direction="column" spacing={1}>
     
      <Button variant="contained" color="success">
        Edit
      </Button>
      <Button variant="contained" color="error">
        Delete
      </Button>
    </Stack>
  );
}