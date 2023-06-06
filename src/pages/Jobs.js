import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'
import { axiosInstance } from '../config/axios'
import Paginate from '../components/pagination/Paginate'
import { scrollTop } from '../config/scroll-top'


const Jobs = () => {
  const[items, setItems] = useState([])
  const[totalPage, setTotalPage] = useState(0)
  const itemPerPage = 6

 
  async function _fetchData(currentPage){
    const controller = new AbortController();
    
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
      setTotalPage(response.data.total)
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
    _fetchData(0)
    scrollTop(75)
  }, [])


  function handlePageClick(currentPage){
    _fetchData(currentPage)
    scrollTop(75)
  }


  let TotalPage = Math.ceil((isNaN(totalPage[0]?.totalRows) ? 0 : totalPage[0]?.totalRows) / itemPerPage)

  return (
    <div className='bg-white'>
        <Navrbar />
        <Searchbar />
        <div className='container mx-auto'>
            <div className='min-h-[80vh] flex justify-center items-center'>
                <div className='grid grid-cols-3 gap-7 place-items-center py-14'>
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