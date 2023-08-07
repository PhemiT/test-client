import * as React from 'react';
import { AppBar, Box, Button, FormControl, Hidden, InputAdornment,  OutlinedInput } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme from '../src/theme';
import { SearchRounded } from '@mui/icons-material';


const Navbar = (props) => {
    const buttonStyles = {
        boxShadow: 'none',
        transition: 'all 400ms ease',
        textTransform: 'capitalize',
        fontWeight: '800',
    }
  return (
    <>
    <AppBar
    position='sticky'
    elevation={0}
    sx={{ 
        display: 'yflex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: {xs: '10px 25px', md: '10px 45px'},
        borderBottom: '1px solid #f0f0f0'
         }}>
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: { sm: '15px', md: '35px'}
             }}>
            <MenuIcon />
            <Hidden smDown>
            <img src="/favicon.svg" alt="heyfood" />
            </Hidden>
            <Button 
            variant="contained" 
            startIcon={<LocationOnIcon />}
            sx={{
                ...buttonStyles,
                fontSize: '0.875rem',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#f0f0f0'
                }
            }}
            >
                Lagos
            </Button>
        </Box>
        <Box>
            <FormControl 
            variant="outlined"
            sx={{
                background: '#f0f0f0',
                border: '0.1px solid transparent',
                boxShadow: 'none',
                borderRadius: '50px',
                display: {xs: 'none', sm: 'block'}
            }}
            >
                <OutlinedInput
                    name="search"
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder='Search for restaurants or food'
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchRounded sx={{ color : theme.palette.secondary.main}} />
                    </InputAdornment>
                    }
                    sx={{
                        border: 'none',
                        height: '45px',
                        '& fieldset': {
                            border: 'none'
                        },
                        '& input::placeholder': {
                            color: theme.palette.secondary.main,
                            fontWeight: '400',
                            fontSize: '13px'
                        }
                    }}
                />
            </FormControl>
        </Box>
        <Box sx={{display:'inline-flex'}}>
            <Button 
            variant="contained" 
            sx={{
                ...buttonStyles,
                display: {xs: 'none', md: 'block'},
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#f0f0f0'
                }
            }}
            >
                SIGN IN
            </Button>
            <Button 
            variant="contained" 
            sx={{
                ...buttonStyles,
                backgroundColor: '#000',
                padding: '7px 20px',
                color: '#fff',
                border: '0.1px solid transparent',
                borderRadius: '50px',
                ml: '23px',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#09A110'
                }
            }}
            >   
                <ShoppingCartIcon />
                <Hidden smDown>
                    CART - 0
                </Hidden>
            </Button>
        </Box>
    </AppBar>
    </>
  )
}

export default Navbar