import React from 'react'
import SideBar from './sidebar'
import '../styles/deposit.css'
import { TextField } from '@mui/material'
import { Alert, Button } from '@mui/material';

function Deposit() {

  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  

  return (
    <div className='depside' >
    <SideBar/>
    <div className='dep'>
    <h2>Upload Image</h2>
    <TextField type='file'></TextField>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
      <Button type="submit" style={{backgroundColor:"#000000",color:"#fff"}}>Submit</Button>

      {showAlert && (
        <Alert severity="success"  onClose={() => setShowAlert(false)}>
          Image uploaded successfully!
        </Alert>
      )}
    </form>
    </div>
    </div>

    
  )
}

export default Deposit