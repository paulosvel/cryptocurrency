import React from 'react'
import { Box } from '@mui/material'
import CoinItem from './CoinItem';
const Coins = (props) => {
  const coins = props.coins;

  return (
    <Box>
      <Box>
        <Box>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </Box>
        {props.coins.map(coins =>{
          return (
            <CoinItem coins = {coins} key ={coins.id} />
          )
        })}
      </Box>
    </Box>
  )
}

export default Coins