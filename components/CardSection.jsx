import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { ArrowForwardRounded } from '@mui/icons-material';
import axios from 'axios';

const CardSection = () => {
    const [data,setData] = useState(null)
    const buttonStyles = {
        backgroundColor: '#f0f0f0',
        width: '30px',
        height: '30px',
        border: '0.1px solid tranparent',
        borderRadius: '50%'
    }

    const buttonAltStyles = {
        boxShadow: 'none',
        transition: 'all 400ms ease',
        textTransform: 'capitalize',
        fontWeight: '500',
        fontSize: '15px',
        display: {xs: 'none', md: 'block'},
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#f0f0f0'
        }
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    

    useEffect(() => {
        const fetchData = async (endpoint) => {
            try {
                const response = await axios.get(endpoint);
                setData(response.data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        const endpoint=`${apiUrl}get-sorting?sortParam=numberOfRatings`;
        fetchData(endpoint);
    }, [])


  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: '25px'
        }}>
            <Typography variant='h4' sx={{
                fontWeight: '700',
                fontSize: {xs: '100%', sm: '150%', md: '212%'}
            }}>
                Popular Stores
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Button 
                variant="contained" 
                sx={{...buttonAltStyles}}
                >
                    See all
                </Button>
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
                >
                    <IconButton aria-label="left arrow" sx={{...buttonStyles}}>
                        <ArrowBackRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="right arrow" sx={{...buttonStyles}}>
                        <ArrowForwardRounded />
                    </IconButton>
                </Box>
            </Box>
        </Box>
        <Grid container spacing={3}
            sx={{
                my: '25px'
            }}
            >
            {
                Array.isArray(data)
                ?
                (data.slice(0, 3).map(item => (
                    <Card key={item.id} name={item.name} foodClasses={item.foodClasses} rating={item.rating} numOfRatings={item.numberOfRatings} />
                )))
                :
                <Typography variant='caption'>
                    Loading...
                </Typography>
            }
        </Grid>
    </div>
  )
}

export default CardSection