import { Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';

function Coin() {
  const [coin , setCoin] = useState ({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(()=> {
    axios.get(url).then((res) =>{
      setCoin(res.data)
    }).catch((error)=>{
      console.log(error)
    })


  }, [])
  return (
    <Box>
<h1>{coin.id}</h1>
      </Box>
  )
}

export default Coin