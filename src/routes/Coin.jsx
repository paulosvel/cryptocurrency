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
<Box>
  <Box>
    <h1>{coin.name}</h1>
  </Box>
  <Box>
    <Box>
      <span>Rank #{coin.market_cap_rank}</span>
    </Box>
    <Box>
      <Box>
        {coin.image ? <img src={coin.image.small} /> :null}
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>        
      </Box>
      <Box>
        {coin.market_data ? <h1>{coin.market_data.current_price}</h1> : null}
      <h1>{coin.market_data.current_price}</h1>
      </Box>
    </Box>
  </Box>

  <Box>
    <table>
      <thead>
        <tr>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>14d</th>
          <th>30d</th>
          <th>1y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{coin.market_data.price_change_percentage_1h_in_currency.eur}</td>
          <td>{coin.market_data.price_change_percentage_24h_in_currency.eur}</td>
          <td>{coin.market_data.price_change_percentage_7d_in_currency.eur}</td>
          <td>{coin.market_data.price_change_percentage_14d_in_currency.eur}</td>
          <td>{coin.market_data.price_change_percentage_30d_in_currency.eur}</td>
          <td>{coin.market_data.price_change_percentage_1y_in_currency.eur}</td>
        </tr>
      </tbody>
    </table>
  </Box>
  <Box>
    <Box>
    <Box>
      <Box>
<h4>24 Hour Low</h4>
<p>{coin.market_date.low_24.eur}</p>
</Box>
<Box>
<h4>24 Hour High</h4>
<p>{coin.market_date.high_24.eur}</p>
</Box>
    </Box>
    <Box>
    <Box>
<h4>Market Cap</h4>
<p>{coin.market_date.market_cap.eur}</p>
</Box>
<Box>
<h4>Circulating Supply</h4>
<p>{coin.market_date.circulating_supply}</p>
</Box>
    </Box>

    </Box>
  </Box>

  <Box>
    <Box>
      <h3>About</h3>
      <p>{coin.description.en}</p>
    </Box>
  </Box>
</Box>
      </Box>
  )
}

export default Coin