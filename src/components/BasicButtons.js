import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton'


const BasicButtons = () => {
  return (
    <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained" color="primary">
      boton 0
    </Button>
    <Button variant="contained" color="secondary" size="small">
      boton 1
    </Button>
    <Button variant="contained" color="success" size="medium">
      boton 2
    </Button>
    <Button variant="contained" color="warning" size="large" href="https://google.com">
      boton 3
    </Button>
    <Button variant="contained" color="error">
      boton 4
    </Button>
 <br/>
    <AddIcon color="secondary" fontSize="large"/>
    <AppBlockingIcon color="secondary" fontSize="large"/>
    <Button 
      variant="contained" 
      color="secondary"  
      Addicon={<AppBlockingIcon />}
      >
      add
    </Button>

    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>

    <Stack direction="row" spacing={3}>
      <Button variant="contained" startIcon={<AppBlockingIcon fontSize="small" />}>
        AppBlockingIcon
      </Button>
    </Stack>

    <IconButton aria-label="message" 
    ><AppBlockingIcon color="secondary" fontSize="large"/>
      
    </IconButton>
 
  </Stack>
  )
}

export default BasicButtons
