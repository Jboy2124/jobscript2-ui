import React, { useState } from 'react'
import JobModal from '../modal/JobModal'
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';


const JobSpecCard = (props) => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)


  return (
    <div className='bg-gradient-to-br from-[#748DA6] to-[#D3CEDF] ring-2 ring-white hover:shadow-2xl duration-300 rounded'>
        <div className='h-[200px] w-[330px]'>
            <div className='w-full flex flex-col justify-center items-center py-4 px-2'>
                <div className='text-[18px] text-white font-poppins font-bold hover:text-orange-600 hover:underline hover:underline-offset-4 cursor-pointer' 
                     onClick={onOpenModal}
                  >{ props.jobTitle }
                </div>
                <div className='text-[14px] text-white font-poppins'>{ props.companyName }</div>
                <div className='text-[13px] text-white font-poppins'>{ props.city }</div>
            </div>
            <div className='flex justify-center items-center pt-10 px-5 space-x-2'>
                <button type='button'
                        className='px-4 py-[6px] rounded bg-orange-600 hover:bg-orange-700 duration-200 text-white text-[13px] font-poppins'
                >
                  Apply
                </button>
                <button 
                  type='button'
                  onClick={onOpenModal}
                  className='px-4 py-[6px] rounded ring-1 ring-orange-600 hover:bg-orange-600 duration-200 text-white text-[13px] font-poppins'
                  >
                    Details
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