import React from 'react'
import ReactPaginate from 'react-paginate'

const Paginate = (props) => {

    let totalPage = (isNaN(props.totalPages) ? 0 : props.totalPages)

    const getCurrentPage = (currentPage) => {
        props.handleSelectedPageClick(currentPage.selected)
    }

  return (
    <div className='flex justify-center items-center'>
        <ReactPaginate 
             previousLabel={ 'Prev' }
             nextLabel={'Next'}
             breakLabel={'...'}
             pageCount={totalPage}
             pageRangeDisplayed={4}
             marginPagesDisplayed={5}
             onPageChange={getCurrentPage}
             // containerClassName={'pb-10'}
             pageClassName={'flex justify-center items-center text-white text-[15px] font-poppins rounded hover:bg-orange-700 duration-200 bg-orange-600 px-2 w-10 h-9'}
             // pageLinkClassName={'text-red-700'} // number per page
             // breakClassName={'flex justify-center items-center text-white text-[14px] font-poppins rounded hover:bg-orange-700 duration-200 bg-orange-600 px-2 w-10 h-9'}
             previousClassName={'font-poppins text-[15px] px-3'}
             nextClassName={'font-poppins text-[14px] px-3'}
             activeClassName={'bg-orange-800'}
             className='flex justify-center items-center space-x-2'
        />
    </div>
  )
}

export default Paginate