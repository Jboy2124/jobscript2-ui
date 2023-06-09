import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'
import { axiosInstance } from '../config/axios'
import Paginate from '../components/pagination/Paginate'
import { scrollTop } from '../config/scroll-top'
import LoadingPage from './LoadingPage'


const Jobs = () => {
  const[items, setItems] = useState([])
  const[totalPage, setTotalPage] = useState(0)
  const[itemsLoading, setItemsLoading] = useState(false)
  const itemPerPage = 15

 

  async function _fetchTotalRows(){
    await axiosInstance({
      method: 'GET',
      url: '/total-jobs'
    })
    .then(response => {
      setTotalPage(response.data.total)
    })
    .catch(error => {
      console.log(error)
    })
  }
  

  async function _fetchData(currentPage){
    const controller = new AbortController();
    setItemsLoading(true)
    
    const queryParams = {
      limit: itemPerPage,
      offset: parseInt((isNaN(currentPage) ? 0 : currentPage) * itemPerPage)
    }

    await axiosInstance({
      method: 'GET',
      url: '/jobs',
      signal: controller.signal,
      params: queryParams
    })
    .then(response => {
        setItems(response.data.jobs)
        setItemsLoading(false)
    })
    .catch(error => {
      console.log(error)
      controller.abort()
    })

    return () => {
      controller.abort()
    }
  }


  useEffect(() => {
    _fetchTotalRows()
    _fetchData(0)
    scrollTop(0)
  }, [])

  
  function handlePageClick(currentPage){
    _fetchData(currentPage)
    scrollTop(0)
  }

  let TotalPage = Math.ceil((isNaN(totalPage[0]?.totalRows) ? 0 : totalPage[0]?.totalRows) / itemPerPage)

  return (
    <div className='relative bg-white'>
        <Navbar />
        <Searchbar />
        {/* <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,320L80,282.7C160,245,320,171,480,165.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        <div className='container mx-auto'>
            <div className='min-h-[80vh] flex justify-center items-center'>
                { itemsLoading ? <LoadingPage /> : 
                    <div className='grid grid-cols-3 gap-6 place-items-center py-14 z-20'>
                      {
                        items.map((items, index) => {
                          return(
                            <div key={index}>
                              <JobSpecCard 
                                jobID={items.id}
                                jobTitle={items.job} 
                                companyName={items.company}
                                city={items.city}
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                 }
              </div>
            <div className='flex justify-center items-center pb-10'>
              <Paginate 
                  totalPages={TotalPage}
                  handleSelectedPageClick={handlePageClick}
                />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Jobs