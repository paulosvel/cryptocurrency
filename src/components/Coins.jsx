import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
import Search from './Search';

const Coins = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCoins, setDisplayedCoins] = useState(10);

  const handleChange = (search) => {
    setSearchTerm(search);
  };

  const handleLoadMore = () => {
    setDisplayedCoins(prevDisplayedCoins => prevDisplayedCoins + 10);
  };

  const filteredCoins = props.coins.filter(
    (coin) =>
      !searchTerm || coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search onSearch={handleChange} />
      <Box sx={{ maxWidth: '1000px', margin: 'auto' }}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '2rem 1rem',
              padding: '.7rem 1rem',
              backgroundColor: '#26272b',
              boxShadow: '0px 0px 12px #18191b',
              borderRadius: '8px',
            }}
          >
            <p>#</p>
            <p style={{ marginLeft: '4px' }}>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Market Cap</p>
          </Box>
          {filteredCoins.slice(0, displayedCoins).map((coin) => (
            <Link
              style={{ textDecoration: 'none' }}
              to={`/coin/${coin.id}`}
              key={coin.id}
            >
              <CoinItem coins={coin} />
            </Link>
          ))}
          {displayedCoins < filteredCoins.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" onClick={handleLoadMore} sx={{ backgroundColor: 'purple', marginBottom: '10px' }}>
                Load More
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Coins;
