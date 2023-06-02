import React from 'react'

const JobSpecCard = (props) => {
  return (
    <div className='bg-gradient-to-br from-gray-200 to-gray-100 ring-1 ring-gray-300 rounded hover:shadow-2xl duration-300'>
        <div className='h-[300px] w-[410px]'>
            <div className='w-full flex flex-col justify-center items-center py-4 px-2'>
                <div className='text-[18px] font-poppins font-bold' >{ props.jobTitle } - { props.jobID }</div>
                <div className='text-[14px] font-poppins'>{ props.companyName }</div>
                <div className='text-[13px] font-poppins'>{ props.city }</div>
            </div>
        </div>
    </div>
  )
}

export default JobSpecCard