import React, { useEffect } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import { scrollTop } from '../config/scroll-top'


const PostJobs = () => {

  useEffect(() => {
    scrollTop(0)
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