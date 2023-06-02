import React from 'react'

const ExploreJobsCard = (props) => {
  return (
    <div className={`w-64 h-96 rounded hover:scale-105 hover:shadow-xl duration-300 ring-4 ring-white ${props.backColor}`}>
        <div className='flex justify-center items-center w-full h-full'>
            <div className='grid grid-rows-2 gap-5 place-items-center'>
                <div className='text-gray-500 text-[22px] font-poppins font-bold'>{ props.name }</div>
                <div className='flex justify-center items-center text-gray-600 text-[15px] font-poppins hover:text-orange-600 duration-300 hover:cursor-pointer'>Explore  <span className='text-[22px]'><ion-icon name="return-up-forward-outline"></ion-icon></span> </div>
            </div>
            
        </div>
    </div>
  )
}

export default ExploreJobsCard