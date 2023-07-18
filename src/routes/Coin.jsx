import { Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import DOMPurify from 'dompurify';

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
      {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.eur.toLocaleString()}</h1> : null}
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
        <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(1)}%</p> : null}</td>
        </tr>
      </tbody>
    </table>
  </Box>
  <Box>
    <Box>
    <Box>
      <Box>
<h4>24 Hour Low</h4>
{coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.eur.toLocaleString()}</p> : null}
</Box>
<Box>
<h4>24 Hour High</h4>
{coin.market_data?.high_24h ? <p>{coin.market_data.high_24h.eur.toLocaleString()}</p> : null}
</Box>
    </Box>
    <Box>
    <Box>
<h4>Market Cap</h4>

{coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.eur.toLocaleString()}</p> : null}

</Box>
<Box>
<h4>Circulating Supply</h4>
{coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
</Box>
    </Box>

    </Box>
  </Box>

  <Box>
    <Box>
      <h3>About</h3>
      <p dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
       }}>

    </p>
    </Box>
  </Box>
</Box>
      </Box>
  )
}

export default Coin;