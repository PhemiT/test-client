import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const foodClassBtn = (props) => {
  return (
      <Button
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: 'transparent',
        p: '7px',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#f0f0f0'
      }
      }}
      onClick={props.handleClick}
      >
        <img src="/foodClass.png" alt="" />
      <Typography variant='caption' sx={{
        color: '#000',
        fontWeight: '500',
        textTransform: 'capitalize'
      }}>
        {props.name}
      </Typography>
      </Button>
  )
}

export default foodClassBtn