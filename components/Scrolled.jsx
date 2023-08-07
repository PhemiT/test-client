import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { ArrowForwardRounded } from '@mui/icons-material';

const Scrolled = () => {
    const buttonStyles = {
        backgroundColor: '#f0f0f0',
        width: '30px',
        height: '30px',
        border: '0.1px solid tranparent',
        borderRadius: '50%'
    }

    const boxStyles = {
        width: '100%', 
        height: '150px', 
        objectFit: 'cover',
        border: '0.1px solid transparent',
        borderRadius: '10px'
    }
  return (
    <Box 
    sx={{
        display: 'flex',
        alignItems: 'center',
        my:'40px',
        px:'45px'
    }}
    >
        <IconButton aria-label="left arrow" sx={{...buttonStyles}}>
            <ArrowBackRoundedIcon />
        </IconButton>
        <Grid container spacing={1} px='15px'>
            <Grid item xs={4}>
                <Box 
                component="img" 
                src='/abeokuta.png'
                alt="advert image" 
                sx={{...boxStyles}} 
                />
            </Grid>
            <Grid item xs={4}>
                <Box 
                component="img" 
                src='/bodija.png'
                alt="advert image" 
                sx={{...boxStyles}} 
                />
            </Grid>
            <Grid item xs={4}>
                <Box 
                component="img" 
                src='/feedwell.png'
                alt="advert image" 
                sx={{...boxStyles}} 
                />
            </Grid>
        </Grid>
        <IconButton aria-label="right arrow" sx={{...buttonStyles}}>
            <ArrowForwardRounded />
        </IconButton>
    </Box>
  )
}

export default Scrolled