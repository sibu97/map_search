import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";


const searchbox = () => {
  return (
    <div style={{ display: "flex",  }}>
      <div style={{flex:1}}>
        <OutlinedInput style={{width:"100%"}} />
      </div>
      <div style={{display: "flex",alignItems:"center"}}>
      <Button variant="contained" color="primary">
         Search
      </Button>
      </div>
    </div>

  )
}

export default searchbox;