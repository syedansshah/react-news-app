import React, { useState, useContext, useEffect } from 'react';
import { Typography, Select, MenuItem, Button, Box } from '@mui/material';

import { NewsFeedContext } from '../../Context/NewsFeedContext';


function UserPreferences() {
  const { userPreferences, setUserPreferences } = useContext(NewsFeedContext);

  const [selectedSource1, setSelectedSource1] = useState('');
  const [selectedSource2, setSelectedSource2] = useState('');
  const [selectedSource3, setSelectedSource3] = useState('');
  const menuItems = [
    { key: "source1", value: "News API" },
    { key: "source2", value: "New York Times" },
    { key: "source3", value: "The Guardian" }]
  // Inside the UserPreferences component
  useEffect(() => {
    // Load the user preferences from local storage when the component mounts
    const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));

    if (savedPreferences) {
      setSelectedSource1(savedPreferences.source1 || '');
      setSelectedSource2(savedPreferences.source2 || '');
      setSelectedSource3(savedPreferences.source3 || '');
    }
  }, []);

  // ...



  const handleSavePreferences = () => {
    const updatedPreferences = {
      source1: selectedSource1,
      source2: selectedSource2,
      source3: selectedSource3,
    };

    console.log('Updated Preferences:', updatedPreferences);
    // Save the updated preferences to local storage
    localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));

    setUserPreferences(updatedPreferences);
  };

  return (
    <>
      <Typography variant="h6" align="left">User Preferences</Typography>

      <Select
        value={selectedSource1}
        onChange={(e) => setSelectedSource1(e.target.value)}
        label="Source 1"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        {menuItems.map((item) => <MenuItem value={item.value}>{item.value}</MenuItem>)}
      </Select>

      <Select
        value={selectedSource2}
        onChange={(e) => setSelectedSource2(e.target.value)}
        label="Source 2"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        {menuItems.map((item) => <MenuItem value={item.value}>{item.value}</MenuItem>)}
      </Select>

      <Select
        value={selectedSource3}
        onChange={(e) => setSelectedSource3(e.target.value)}
        label="Source 3"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        {menuItems.map((item) => <MenuItem value={item.value}>{item.value}</MenuItem>)}
      </Select>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSavePreferences}
      >
        Save Preferences
      </Button>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          <a href="/feed">Back to News Feed</a>
        </Typography>
      </Box>
    </>
  );
}

export default UserPreferences;
