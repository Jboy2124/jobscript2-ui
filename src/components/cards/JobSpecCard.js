import React from 'react'

const JobSpecCard = (props) => {
  return (
    <div className='bg-gray-100 ring-1 ring-gray-300 rounded hover:shadow-2xl duration-300'>
        <div className='h-[400px] w-[480px]'>
            <div className='w-full flex flex-col justify-center items-center py-4 px-2'>
                <div className='text-[18px] font-poppins font-bold' >Job Title</div>
                <div className='text-[14px] font-poppins'>Company Name</div>
                <div className='text-[13px] font-poppins'>Cebu City</div>
            </div>
        </div>
    </div>
  )
}

export default JobSpecCard