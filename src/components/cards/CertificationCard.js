import React from 'react'

const CertificationCard = (props) => {
  return (
    <div className='h-28 w-44 rounded shadow-lg bg-gray-400 flex justify-center items-center p-2'>
        <img src={props.image} alt='logos' className='object-cover' />
    </div>
  )
}

export default CertificationCard