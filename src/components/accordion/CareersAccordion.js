import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'


const CareersAccordion = (props) => {
    // const[desc, setDesc] = useState([])

    // const { index, open, toggle, job, primary} = props

    // useEffect(() => {
    //     setDesc(props.primary)
    // }, [props])

  return (
    <div 
        className='w-[700px] py-4 pb-10 bg-gradient-to-br from-[#748DA6] to-[#D3CEDF] px-5 hover:shadow-lg hover:scale-105 duration-300'>
        <div 
            className='flex justify-between items-center cursor-pointer'
            onClick={props.toggle}
        >
            <div className='text-[20px] font-poppins font-semibold'>{ props.job }</div>
            <div className='text-[20px] font-semibold font-poppins'>{ props.open ? '-' : '+' }</div>
        </div>
        <Collapse isOpened={props.open} >
            <div className=''>
                <ul>
                    {
                        (Array(props.desc)).map((items, index) => {
                           return(
                            <li key={index}>{ items.primary }</li>
                           )
                        })
                    }
                </ul>
            </div>
        </Collapse>
    </div>
  )
}

export default CareersAccordion