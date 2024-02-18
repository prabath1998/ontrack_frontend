import React from 'react'
import { Avatar } from '@mui/material';
const Sidebar = () => {
  return (
    <div className='min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
      <div className='space-y-5 h-full'>
        <div className='flex justify-center'>
            <Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
