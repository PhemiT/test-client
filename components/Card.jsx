import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import theme from '../src/theme';

const Card = (props) => {
  return (
    <>
        <Grid 
        item 
        xs={12}
        sm={4}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mb: '15px'
        }}
        >
            <Box 
            component="img" 
            src="/img.png" 
            alt="restaurant image" 
            sx={{ 
                width: '100%', 
                height: '100px', 
                objectFit: 'cover',
            }} 
            />
            <Typography variant='h5' sx={{
                fontWeight: '700',
                fontSize: '134%',
                py: '10px'
            }}>
                {props.name}
            </Typography>
            <Typography variant='caption' mb='7px' sx={{
                color: '#333'
            }}>
                {props.foodClasses ? props.foodClasses.join(', ') : ''}
            </Typography>
            <Box 
            component='span'
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '20px'
            }}
            >
                <Typography variant='body2'  sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <GradeIcon sx={{ color: theme.palette.secondary.green }} />
                    {props.rating} 
                </Typography>
                <Typography variant='body2'>
                    {props.numOfRatings}+ Ratings
                </Typography>
            </Box>
        </Grid>
    </>
  )
}

export default Card