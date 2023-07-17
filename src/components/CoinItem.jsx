import React from 'react'
import { Box } from '@mui/material'
function CoinItem(props) {
  return (
    <Box>
      <p>{props.coins.market_cap_rank}</p>
      <Box>
        <img src={props.coins.image} />
        <p>{props.coins.symbol}</p>
      </Box>
      <p>{props.coins.current_price}</p>
      <p>{props.coins.price_change_percentage_24h}</p>
      <p>{props.coins.total_volume}</p>
      <p>{props.coins.market_cap}</p>
    </Box>
  )
}

export default CoinItem