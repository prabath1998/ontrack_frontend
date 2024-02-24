import React from 'react'

const TaskCard = () => {
  return (
    <div>
      <div className='card lg:flex justify-between w-full'>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
                <img alt='' className='lg:w-[7rem] lg:h-[7rem] object-cover rounded-md' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'></img>
            </div>
            <div className='space-y-5 '>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg'>Car Rental Website</h1>
                    <p className='text-gray-500 text-sm'>Using latest web frameworks</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {
                    [1,1,1].map((item) => <span className='py-5 px-1 rounded-full techStack'>
                        Angular
                    </span>)
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
