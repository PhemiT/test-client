import { SearchRounded } from '@mui/icons-material'
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import theme from '../src/theme'

const Search = (props) => {
  return (
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
  )
}

export default Search