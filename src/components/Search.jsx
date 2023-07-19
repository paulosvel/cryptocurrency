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

        value={props.searchTerm}
        onChange={handleChange}
        sx={{ backgroundColor: '#800080' }}
        label="Search"
        size='small'
      />
    </Box>
  );
};

export default Search;
