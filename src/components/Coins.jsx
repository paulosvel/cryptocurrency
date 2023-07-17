import React from 'react'
import { Box } from '@mui/material'
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
const Coins = (props) => {
  const coins = props.coins;

  return (
    <Box sx={{maxWidth:"1000px", margin:"auto"}}>
      <Box>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"2rem 1rem", padding:".7rem 1rem", backgroundColor:"#26272b", boxShadow:"0px 0px 12px #18191b", borderRadius:"8px"}}>
          <p >#</p>
          <p style={{marginLeft:"4px"}}>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </Box>
        {props.coins.map(coins =>{
          return (
            <Link style={{textDecoration:"none"}} to={`/coin/${coins.id}`} element={<Coin />} key ={coins.id}>
            <CoinItem coins = {coins}  />
            </Link>
          )
        })}
      </Box>
    </Box>
  )
}

export default Coins