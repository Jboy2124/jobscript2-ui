import React from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'


const AboutUs = () => {
  return (
    <div className='bg-white'>
      <Navrbar />
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
