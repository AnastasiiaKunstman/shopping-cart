import React from 'react';
import { CartItem } from '../store/types';
import ProductItem from './ProductItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingCartOverview from './ShoppingCartOverview';

const Cart: React.FC<{ cart: CartItem[] }>  = ({ cart }) => {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', width: '100%'}}>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {cart.map((item, index) => (
                  <Grid item key={`${item.id}-${index}`} xs>
                    <ProductItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs>
              <ShoppingCartOverview cartItems={cart} />
            </Grid>
          </Grid>
      </Box>
    );
};

export default Cart;