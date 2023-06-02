import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import Searchbar from '../components/search/Searchbar'
import JobSpecCard from '../components/cards/JobSpecCard'
import { axiosInstance } from '../config/axios'
import Paginate from '../components/pagination/Paginate'


const Jobs = () => {
  const[items, setItems] = useState([])
  const[totalPage, setTotalPage] = useState(0)
  const itemPerPage = 3

 
  async function _fetchData(currentPage){

    const queryParams = {
      limit: itemPerPage,
      offset: currentPage * itemPerPage
    }

    await axiosInstance({
      method: 'GET',
      url: '/jobs',
      params: queryParams
    })
    .then(response => {
      setItems(response.data.jobs)
      setTotalPage(response.data.total)
    })
    .catch(error => {
      console.log(error)
    })
  }


  useEffect(() => {
    _fetchData()
  }, [])


  function handlePageClick(currentPage){
    _fetchData(currentPage)
  }

  let TotalPage = Math.ceil((isNaN(totalPage[0]?.totalRows) ? 0 : totalPage[0]?.totalRows) / itemPerPage)

 
  return (
    <div className='bg-white'>
        <Navrbar />
        <Searchbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-4 place-items-center py-14'>
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
              {/* <button 
                type='button'
                onClick={() => _loadData()}
                className={`${ (offsetVar <= total[0]?.totalRows ) ? 'block' : 'hidden' }  px-32 py-3 bg-orange-600 shadow-lg hover:bg-orange-700 duration-300 rounded text-[15px] text-white font-poppins`}>
                  Load more...
              </button> */}
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