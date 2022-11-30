import React from 'react'
import Typography from '@mui/material/Typography'

const TypographyComp = () => {
  return (
    <div>
      <Typography variant="h1" color="secondary" align='left'>
        Typography
      </Typography>
      <Typography variant="h2" color="initial">
        Typography
      </Typography>
      <Typography variant="subtitle2" color="pink" align='right'>
        Typography
      </Typography>
      <Typography variant="overline" color="textSecondary"  sx={{fontSize:"35px"}}>
        Typography
      </Typography>
      <Typography variant="h5" color="primary">
        Typography
      </Typography>
    </div>
  )
}

export default TypographyComp
