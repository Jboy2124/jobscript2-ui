import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'
import { axiosInstance } from '../config/axios'

const Jobs = () => {
  const [data, setData] = useState([])
  const [offsetVar, setOffsetVar] = useState(0)

  const queryParams = {
    limit: 4,
    offset: offsetVar
  }

  async function _loadData(){
    await axiosInstance({
      method: 'GET',
      url: '/jobs',
      params: queryParams
    })
    .then(response => {
      setData(host => [...host, ...response.data.jobs])
      setOffsetVar(val => val + 4)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    _loadData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


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
                          <JobSpecCard 
                            jobTitle={items.job} 
                            companyName={items.company}
                            city={items.city}
                          />
                        </div>
                      )
                    })
                  }
                </div>
            </div>
            <div className='flex justify-center items-center pb-10'>
              <button 
                type='button'
                onClick={() => _loadData()}
                className='px-32 py-3 bg-orange-600 shadow-lg hover:bg-orange-700 duration-300 rounded text-[15px] text-white font-poppins'>
                  Load more...
              </button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Jobs