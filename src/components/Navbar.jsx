import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'
function Navbar() {
  return (
    <Link style={{textDecoration:"none"}} to="/">

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1px"}}>
        <FaCoins style={{color:"purple" , fontSize:"40px"}} />
        <h1>Coin <span style={{color:"purple"}}>Search</span></h1>
      </Box>
    </Link>
  )
}

export default Navbar