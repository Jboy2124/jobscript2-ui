import React from 'react'

const Searchbar = () => {
  return (
    <div className='bg-gray-200 shadow-sm'>
        <div className='container mx-auto'>
            <div className='min-h-[90px] flex justify-center items-center'>
                <div className='flex items-center w-[500px] bg-white px-2 py-1 rounded-full'>
                    <div className='text-gray-600 text-[20px] flex justify-center items-center px-2'><ion-icon name="filter-outline"></ion-icon></div>
                    <input type='text' placeholder='Search job title, city, province or company' className='w-full h-full outline-none py-1 pr-2 text-gray-600 text-[13px] font-poppins flex items-center'></input>
                    <div className='flex justify-center items-center px-2 text-gray-600 text-[20px] hover:bg-gray-200 w-9 h-9 rounded-full duration-300 cursor-pointer'><ion-icon name="search-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar