import React from 'react';
import Card from './Card';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import theme from '../src/theme';

const Restaurants = (props) => {
    const buttonStyles = {
        boxShadow: 'none',
        transition: 'all 400ms ease',
        textTransform: 'capitalize',
        fontWeight: '800',
        color: theme.palette.error.main,
        height: '35px',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#f0f0f0'
        }
    }
  return (
    <div>
        <Box>
            <Divider />
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                mt: '25px',
                gap: '7px'
            }}>
                <Typography variant='h4' sx={{
                    fontWeight: '700',
                    fontSize: {xs: '100%', sm: '150%', md: '212%'}
                }}>
                    {props.heading}
                </Typography>
                {
                    props.heading !== 'All Restaurants' &&
                    (
                    <Button variant='contained' onClick={props.reset} sx={{...buttonStyles}}>
                        Reset
                    </Button>
                    )
                }
            </Box>
            <Grid container spacing={3}
            sx={{
                my: '25px',
                width: '100%'
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