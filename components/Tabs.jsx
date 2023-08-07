import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Tabs = () => {
    const commonStyles ={
        boxShadow: 'none',
        transition: 'all 400ms ease',
        textTransform: 'capitalize',
        border: '0.1px solid transparent',
        borderRadius: '50px',
        fontWeight: '500',
        fontSize: {xs: '70%', md: '118%'},
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px 20px',
        '&:hover' : {
            boxShadow: 'none',
            backgroundColor: '#f0f0f0'
        }
    }
  return (
    <div>
        <Box
        sx={{
            padding: {xs: '20px 25px', md: '20px 45px'},
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start'},
            gap: '15px'
        }}
        >
        <Button 
            variant="contained" 
            startIcon={<LocalDiningIcon />} 
            sx={{
                ...commonStyles,
                '&:hover' : {
                    backgroundColor: '#000',
                    boxShadow: 'none'
                }
            }}
            >
                Restaurants
            </Button>
            <Button 
            variant="contained" 
            startIcon={<LocalMallIcon />}
            sx={{
                ...commonStyles,
                backgroundColor: 'transparent',
                color: '#000'
            }}
            >
                Grocery
            </Button>
            <Divider />
        </Box>
    </div>
  )
}

export default Tabs