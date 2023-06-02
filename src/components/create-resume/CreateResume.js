import React from 'react'

const CreateResume = () => {
  return (
    <div className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='min-h-[25vh] flex justify-center items-center'>
                <div className='grid grid-rows-2 gap-1 place-items-center'>
                    <div className='text-[20px] font-poppins'>You don't have a resume? No problem, Let us help you create one.</div>
                    <button className='px-14 py-2 text-[16px] text-white font-poppins bg-orange-600 hover:bg-orange-700 duration-200 rounded-full shadow-xl'>Create Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateResume