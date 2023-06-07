import React, { useEffect } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import { scrollTop } from '../config/scroll-top'
import Login from '../components/login/Login'


const PostJobs = () => {

  useEffect(() => {
    scrollTop(0)
  }, [])

  return (
    <div className='relative bg-gray-200'>
        <Navrbar />
        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,176C274.3,149,343,139,411,160C480,181,549,235,617,266.7C685.7,299,754,309,823,293.3C891.4,277,960,235,1029,234.7C1097.1,235,1166,277,1234,288C1302.9,299,1371,277,1406,266.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <Login />
            </div>
        </div>
        {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,37.3C384,21,480,11,576,32C672,53,768,107,864,128C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        <Footer />
    </div>
  )
}

export default PostJobs