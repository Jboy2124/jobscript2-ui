import React, { useEffect, useState } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import ReactPaginate from 'react-paginate'
import { axiosInstance } from '../config/axios'
import JobSpecCard from '../components/cards/JobSpecCard'

const AboutUs = () => {
  const[items, setItems] = useState([])
  const[totalPage, setTotalPage] = useState(0)
  const itemPerPage = 4

 
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
    _fetchData(currentPage.selected)
  }

  let myTotalPage = Math.ceil(totalPage[0]?.totalRows / itemPerPage)

  return (
    <div className='bg-white'>
        <Navrbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-4 place-items-center'>
                  {
                    items.map((item, index) => {
                      return(
                        <div key={index}>
                          <JobSpecCard 
                            jobID={item.id}
                            jobTitle={item.job}
                            companyName={item.company}
                            city={item.city}
                          />
                        </div>
                      )
                    })
                  }
                </div>
                
            </div>
            <div className='pb-10'>
              <ReactPaginate 
                    previousLabel={ 'Prev' }
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={myTotalPage}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={5}
                    onPageChange={handlePageClick}
                    // containerClassName={'pb-10'}
                    pageClassName={'flex justify-center items-center text-white text-[14px] font-poppins rounded hover:bg-orange-700 duration-200 bg-orange-600 px-2 w-10 h-9'}
                    // pageLinkClassName={'text-red-700'} // number per page
                    // breakClassName={'flex justify-center items-center text-white text-[14px] font-poppins rounded hover:bg-orange-700 duration-200 bg-orange-600 px-2 w-10 h-9'}
                    previousClassName={'font-poppins text-[14px] px-3'}
                    nextClassName={'font-poppins text-[14px] px-3'}
                    activeClassName={'bg-orange-800'}
                    className='flex justify-center items-center space-x-2'
                />
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs