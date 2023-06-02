import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'
import { axiosInstance } from '../config/axios'

const Jobs = () => {
  const [data, setData] = useState([])

  async function _loadData(){
    await axiosInstance({
      method: 'GET',
      url: '/jobs'
    })
    .then(response => {
      setData(response.data.jobs)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    _loadData()
  }, [])
  

  return (
    <div className='bg-white'>
        <Navrbar />
        <Searchbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-4 place-items-center py-14'>
                  {
                    data.map((items, index) => {
                      return(
                        <div key={index}>
                          <JobSpecCard name={items.company} />
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