import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import UserPreferences from './UserPreferences';

function Profile() {

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4" align="center">User Profile</Typography>

        <UserPreferences />

      </Paper>
    </Container>
  );
}

export default Profile;
