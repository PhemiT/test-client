import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const Sorting = (props) => {
    const [numOfStores, setNumOfStores] = useState('');
    const labelStyles = {
        color: '#000',
        fontWeight: '400'
    }
    
  return (
    <Box
    sx={{
        position: 'sticky',
        top: '85px',
        pt: '25px',
    }}
    >
        <Typography variant='h4' sx={{
            fontWeight: '700'
        }}>
            All Stores
        </Typography>
        <Typography mt='20px'>
            ({props.numOfStores} Stores)
        </Typography>
        <FormControl>
            <FormLabel 
            id="sorting"
            color='secondary'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                mt: '25px',
                color: '#000',
                fontSize: '170%'
            }}
            >
                <SortIcon /> Sort
            </FormLabel>
            <RadioGroup
                aria-labelledby="sorting"
                name="sorting"
                value={props.value}
                onChange={props.handleChange}
            >
                <FormControlLabel value="numberOfRatings" control={<Radio color='secondary' />} label="Most Popular" sx={{...labelStyles}} />
                <FormControlLabel value="rating" control={<Radio color='secondary' />} label="Highest Rated" sx={{...labelStyles}} />
                <FormControlLabel value="createdAt" control={<Radio color='secondary' />} label="Newest" sx={{...labelStyles}} />
                <FormControlLabel value="numberOfRatings" control={<Radio color='secondary' />} label="Most Rated" sx={{...labelStyles}} />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default Sorting