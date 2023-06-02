import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'

const Jobs = () => {
  const [data, setData] = useState([])
  const sample = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16,17,18,19,20]

  function loadData(){
    setData(sample);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='bg-white'>
        <Navrbar />
        <Searchbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-4 place-items-center py-14'>
                  {
                    sample.map((items, index) => {
                      return(
                        <div key={index}>
                          <JobSpecCard name={items} />
                        </div>
                      )
                    })
                  }
                </div>
            </div>
            <div className='flex justify-center items-center pb-10'>
              <button type='button' className='px-32 py-3 bg-orange-600 rounded text-[15px] text-white font-poppins'>Load more...</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Jobs