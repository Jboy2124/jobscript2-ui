import React from 'react'
import { Collapse } from 'react-collapse'


const CareersAccordion = (props) => {

    const { index, open, toggle, job, primary, secondary } = props

  return (
    <div key={index} 
        className='w-[700px] py-4 pb-10 bg-gradient-to-br from-[#748DA6] to-[#D3CEDF] px-5 hover:shadow-lg hover:scale-105 duration-300'>
        <div 
            className='flex justify-between items-center cursor-pointer'
            onClick={toggle}
        >
            <div className='text-[20px] font-poppins font-semibold'>{ job }</div>
            <div className='text-[20px] font-semibold font-poppins'>{ open ? '-' : '+' }</div>
        </div>
        <Collapse isOpened={open} >
            <div className=''>{ primary }</div>
            <div className=''>{ secondary }</div>
        </Collapse>
    </div>
  )
}

export default CareersAccordion