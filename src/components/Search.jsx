import React from 'react';
import { Box, TextField } from '@mui/material';

const Search = (props) => {
  const handleChange = (e) => {
    const searchValue = e.target.value;
    props.onSearch(searchValue);
  };

  return (
    <Box className="navbar">
      <TextField
  placeholder="Search Bar"

        value={props.searchTerm}
        onChange={handleChange}
        sx={{ backgroundColor: '#800080', width:"15%" }}
        variant="filled"
      />
    </Box>
  );
};

export default Search;
