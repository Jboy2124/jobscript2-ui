import React, { useEffect } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'


const PostJobs = () => {

  useEffect(() => {
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }, [])

  return (
    <div className='bg-white'>
        <Navrbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div>Post Jobs</div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostJobs