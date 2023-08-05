import { Button, Typography } from '@mui/material'
import React from 'react'

const foodClassBtn = (props) => {
  return (
    <div>
      <Button>
        <img src="/favicon.svg" alt="" />
        <Typography variant='caption'>
          {props.name}
          name
        </Typography>
      </Button>
    </div>
  )
}

export default foodClassBtn