import React from 'react'
import { Box } from '@mui/material'
import {FaCoins} from 'react-icons/fa'
function Navbar() {
  return (
    <Box>

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <FaCoins style={{color:"purple" , fontSize:"40px"}} />
        <h1>Coin <span style={{color:"purple"}}>Search</span></h1>
      </Box>
    </Box>
  )
}

export default Navbar