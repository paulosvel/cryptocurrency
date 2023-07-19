import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material';
function Search(props) {
  const [search,setSearch]=useState("");


  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  
  if (search.length > 0) {
      props.coins.filter((coins) => {
      return coins.name.match(search);
  });
  }

  return (
  <Box>
<TextField value={search} onChange={handleChange}  sx={{backgroundColor:"white"}} />
  
  {props.coins.map((coins) => {

    <p>{coins.name}</p>
  })}
  </Box>
  
    );

}

export default Search;