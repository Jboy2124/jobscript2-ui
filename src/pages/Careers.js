import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import { axiosInstance } from '../config/axios'
import { scrollTop } from '../config/scroll-top'

const Careers = () => {
  const[data, setData] = useState([])

  async function _loadData(){
    await axiosInstance({
      method: 'GET',
      url: 'careers'
    })
    .then(response => {
      setData(response.data.careers)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    _loadData();
    scrollTop(0);
  }, [])

  return (
    <div className='bg-white'>
        <Navrbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <ul className='flex flex-col space-y-10'>
                  {
                    data.map(items => {
                      return(
                        <li key={items.id}>
                          {items.job}
                            <ul className='px-10'>
                              <li>- {items.desc.primary}</li>
                              <li>- {items.desc.secondary}</li>
                            </ul>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Careers