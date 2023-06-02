import React from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'

const Careers = () => {
  return (
    <div className='bg-white'>
        <Navrbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <h1>Careers</h1>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Careers