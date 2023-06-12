import React from 'react'
import { ScaleLoader } from 'react-spinners'

const LoadingPage = () => {

  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex flex-col justify-center items-center space-y-2'>
                <ScaleLoader 
                    color={'#0A2647'}
                    loading={true}
                    height={35}
                    width={4}
                    radius={2}
                    speedMultiplier={1}
                />
                <span className='text-[#0A2647] text-[13px] font-poppins'>Loading...</span>
            </div>
            
        </div>
    </div>
  )
}

export default LoadingPage