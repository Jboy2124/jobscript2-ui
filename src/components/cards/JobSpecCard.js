import React, { useState } from 'react'
import JobModal from '../modal/JobModal'
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';


const JobSpecCard = (props) => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)


  return (
    <div className='bg-gradient-to-br from-gray-200 to-gray-100 ring-1 ring-gray-300 rounded hover:shadow-2xl duration-300'>
        <div className='h-[200px] w-[330px]'>
            <div className='w-full flex flex-col justify-center items-center py-4 px-2'>
                <div className='text-[18px] font-poppins font-bold' >{ props.jobTitle } - { props.jobID }</div>
                <div className='text-[14px] font-poppins'>{ props.companyName }</div>
                <div className='text-[13px] font-poppins'>{ props.city }</div>
            </div>
            <div className='flex justify-start items-center pt-10 px-5 space-x-2'>
                <button type='button'
                        className='px-4 py-[6px] rounded bg-orange-600 text-white text-[13px] font-poppins'
                >
                  Apply
                </button>
                <button 
                  type='button'
                  onClick={onOpenModal}
                  className='px-4 py-[6px] rounded bg-white text-[13px] font-poppins'
                  >
                    View details...
                </button>
            </div>
        </div>
       <JobModal 
          open={open}
          onCloseModal={onCloseModal}
       />
    </div>
  )
}

export default JobSpecCard