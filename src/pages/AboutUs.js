import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { scrollTop } from '../config/scroll-top'


const AboutUs = () => {

  useEffect(() => {
   scrollTop(0)
  }, [])

  return (
    <div className='bg-white'>
      <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <h1>About Us</h1>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs
