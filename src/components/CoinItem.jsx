import React from 'react'
import { Box } from '@mui/material'
import './Styling.css'
function CoinItem(props) {
  return (
    <Box className="lines" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"2rem 1rem",padding:".7rem 1rem", backgroundColor:"#26272b", boxShadow:"0px 0px 12px #18191b", borderRadius:"8px"}}>
      <p>{props.coins.market_cap_rank}</p>
      <Box  sx={{display:"flex", alignItems:"center",}} >
        <img style={{height:"40px", marginRight:"8px", width:"auto", }} src={props.coins.image} />
        <p style={{textTransform:"uppercase"}}>{props.coins.symbol}</p>
      </Box>
      <p>{props.coins.current_price.toLocaleString()}€</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p>{props.coins.total_volume.toLocaleString()}€</p>
      <p>{props.coins.market_cap.toLocaleString()}€</p>
    </Box>
  )
}

export default CoinItem