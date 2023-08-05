import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Box, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Restaurants = (props) => {
  return (
    <div>
        <Box>
            <Divider />
            <Typography variant='h4' mt='25px'sx={{
                fontWeight: '700'
            }}>
                All Restaurants
            </Typography>
            <Grid container spacing={3}
            sx={{
                my: '25px'
            }}
            >
                {
                    Array.isArray(props.data)
                    ?
                    (props.data.map(item => (
                        <Card key={item.id} name={item.name} foodClasses={item.foodClasses} rating={item.rating} numOfRatings={item.numberOfRatings} />
                    )))
                    :
                    <Typography variant='caption'>
                        Loading...
                    </Typography>
                }
            </Grid>
        </Box>
    </div>
  )
}

export default Restaurants