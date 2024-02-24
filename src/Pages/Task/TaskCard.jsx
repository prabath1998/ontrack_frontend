import React from 'react'

const TaskCard = () => {
  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
                <img className='lg:w-[7rem] lg:h-[rem] object-cover' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fdzone.com%2Farticles%2Fwhat-is-spring-boot&psig=AOvVaw1Q62hmqD4xycnEX1mPvVnI&ust=1708875761103000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCwqcuoxIQDFQAAAAAdAAAAABAE'></img>
            </div>
            <div className='space-y-5 '>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg'>Car Rental Website</h1>
                    <p className='text-gray-500 text-sm'>Using latest web frameworks</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {
                    [1,1,1,1,1].map((item) => <span className='py-5 px-1 rounded-full techStack'>
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
