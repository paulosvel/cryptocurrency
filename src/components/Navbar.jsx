import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'
function Navbar() {
  return (
    <Link style={{textDecoration:"none"}} to="/">

      <Box className="navbar" sx={{display:"flex", justifyContent:"center", alignItems:"center",fontSize:"25px"}}>
        <FaCoins style={{color:"purple" , fontSize:"70px",}} />
        <h1>Coin <span style={{color:"purple"}}>Search</span></h1>
      </Box>
    </Link>
  )
}

export default Navbar