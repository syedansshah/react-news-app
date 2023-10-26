import React, { useState, useContext, useEffect } from 'react';
import { Container, Paper, Typography, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { NewsFeedContext } from '../../Context/NewsFeedContext';
import axios from 'axios';
import { useToken } from '../../Context/TokenContext';

// Define columns for the Data Grid
const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 2 },
  { field: 'content', headerName: 'Content', flex: 3 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'source', headerName: 'Source', flex: 2 },
  { field: 'author', headerName: 'Author', flex: 2 },
  { field: 'date', headerName: 'Date', flex: 1 },
];

function NewsFeed() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { userPreferences } = useContext(NewsFeedContext);

  const { token } = useToken(); // Get the token from the context

  useEffect(() => {
    fetchData();
  }, [])

  console.log('User Preferences in Feed Component:', userPreferences);
  const [articles, setArticles] = useState([
    // Add more articles
  ]);

  async function fetchData() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/feed`, {
        headers: headers,
      });
      if (response.status === 200) {
        setArticles(response.data.data.original)
      }
    } catch (error) {
      // Handle and log the error details
      console.error('feed failed:', error.message);
      console.error('feed trace:', error.stack);
    }

  }

  const getRowId = (row) => {
    // return row.id; // You should return a unique identifier for each row, such as 'id'.
    return Math.random().toString(36).substr(2, 9);
  };
  



  // Filter and search the articles
  const filteredArticles = articles.filter((article) =>
    (article.title?.toLowerCase().includes(searchKeyword?.toLowerCase()) || searchKeyword === '')
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4">News Feed</Typography>
        <p>Source 1: {userPreferences.source1}</p>
        <p>Source 2: {userPreferences.source2}</p>
        <p>Source 3: {userPreferences.source3}</p>
        <TextField
          label="Search articles"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredArticles}
            columns={columns}
            pageSize={10}
            getRowId={getRowId}
          />
        </div>
      </Paper>
    </Container>
  );
}

export default NewsFeed;