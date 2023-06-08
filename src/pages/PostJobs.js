import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { scrollTop } from '../config/scroll-top'
import Login from '../components/login/Login'


const PostJobs = () => {

  useEffect(() => {
    scrollTop(0)
  }, [])

  return (
    <div className='relative bg-gray-200'>
        <Navbar />
        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,320L80,282.7C160,245,320,171,480,165.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <Login />
            </div>
        </div>
        {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,37.3C384,21,480,11,576,32C672,53,768,107,864,128C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        <Footer />
    </div>
  )
}

export default PostJobs