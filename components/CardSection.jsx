import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'

const CardSection = (props) => {
  return (
    <div>
        <Box>
            <Typography variant='h4' mt='25px'sx={{
                fontWeight: '700'
            }}>
                Card Section
            </Typography>
            <Button variant='text'>
                See all
            </Button>
            <Button></Button>
            <Button></Button>
        </Box>
        <Grid container spacing={3}>
            <Card />
            <Card />
            <Card />
        </Grid>
    </div>
  )
}

export default CardSection