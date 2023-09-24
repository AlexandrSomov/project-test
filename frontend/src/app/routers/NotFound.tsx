import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = memo(() => (
  <Box>
    <Typography variant="h3">Nothing to see here!</Typography>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </Box>
));
