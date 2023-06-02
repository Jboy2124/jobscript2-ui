import React from 'react'
import { navMenu } from '../../constants/nav-menu'
import { Link } from 'react-router-dom'

const Navrbar = () => {

    // function postJobs(e){
    //     e.preventDefault();
    //     setTimeout(() => {

    //     }, 300)
    // }
  return (
    <div className='bg-gradient-to-r from-[#0A2647] to-[#205295] sticky top-0 z-50'>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                <div className='flex justify-start items-center space-x-16 text-[15px]'>
                    <div className='text-white font-poppins text-[30px] font-bold'>Job<span className='text-orange-600'>Script</span>.io</div>
                    <ul className='flex justify-center items-center space-x-5 text-white font-poppins'>
                        {
                            navMenu.map((items, index) => {
                                return(
                                    <li key={index} className='hover:text-[#EFEFEF] duration-200'>
                                        <Link to={items.link}>{ items.name }</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button 
                        type='button' 
                        className='rounded-full px-14 py-2 text-white text-[15px] font-poppins bg-orange-600 hover:bg-orange-700 duration-200'>
                            <Link to='/post-job'>Employers / Post Jobs</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navrbar