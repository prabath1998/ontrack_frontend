import React from 'react';
import { Avatar } from '@mui/material';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='cont z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center'>
      <p className='font-bold text-lg'>OnTrack Board</p>
      <div className='flex items-center gap-5'>
        <p>Prabath</p>
        <Avatar src='https://mui.com/static/images/avatar/1.jpg'>C</Avatar>
      </div>
    </div>
  )
}

export default Navbar
