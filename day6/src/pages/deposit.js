import React from 'react'
import SideBar from './sidebar'
import '../styles/deposit.css'
import { TextField } from '@mui/material'

function Deposit() {
  return (
    <div className='depside'>
    <SideBar/>
    <div className='dep'>
    <h2>Upload Image</h2>
    <TextField type='file'></TextField>
    </div>
    </div>
  )
}

export default Deposit