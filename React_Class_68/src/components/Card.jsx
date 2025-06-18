import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//We use props to pass data from a parent component to a child component
const Card = ({v,getData}) => {
  return (
    <>
      {v}
    <button onClick={()=>getData("Ayesha")}>Click me</button>

    <div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" onClick={()=>getData("Enayat")}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>



    </>
  )
}




export default Card
