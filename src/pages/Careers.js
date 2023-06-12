import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { axiosInstance } from '../config/axios'
import { scrollTop } from '../config/scroll-top'
import CareersAccordion from '../components/accordion/CareersAccordion'

const Careers = () => {
  const[data, setData] = useState([])
  const[open, setOpen] = useState(false)
  const[offsetValue, setOffsetValue] = useState(0)
  const[viewLoadMoreButton, setViewLoadMoreButton] = useState(true)
  const currentLimit = 3


  
  async function _loadData(){

    await axiosInstance({
      method: 'GET',
      url: '/careers',
      params: {
        limit: currentLimit,
        offset: offsetValue
      }
    })
    .then(response => {
      setData(data =>[...data, ...response.data.careers])
      setOffsetValue(val => val + currentLimit)
        
      if(response.data.careers.length < currentLimit) {
        setViewLoadMoreButton(false)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }



  function toggle(index) {
    if(open === index){
      return setOpen(null)
    }

    setOpen(index)
  }


  useEffect(() => {
    _loadData()
    scrollTop(0)
    // eslint-disable-next-line
  }, []) 

  
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center text-[20px] font-poppins pt-10'>Be part of our growing tribe</div>
            <div className='min-h-[80vh] flex justify-center items-center py-10'>
                <div className='grid place-items-center gap-3'>
                  { (data.length === 0) ? <div className='text-[18px] font-poppins'>No data to display</div> :
                    data.map((item, index) => {
                      return(
                        <CareersAccordion 
                          key={index}
                          open={index === open}
                          toggle={() => toggle(index)}
                          job={item.job}
                          primary={item.desc.primary}
                          secondary={item.desc.secondary}
                        />
                      )
                    })
                  }
                </div>
            </div>
        <div className={`${ viewLoadMoreButton ? 'block' : 'hidden' }  flex justify-center items-center pb-14 pt-5`}>
                  <button 
                    type='button' className='px-24 py-3 text-[14px] text-white font-poppins rounded bg-orange-600'
                    onClick={_loadData}
                  >
                      Load more
                  </button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Careers