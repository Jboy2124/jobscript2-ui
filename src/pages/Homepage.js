import React, { useEffect } from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import HeroPage from '../components/hero/HeroPage'
import Certifiedby from '../components/certification/Certifiedby'
import CreateResume from '../components/create-resume/CreateResume'
import Register from '../components/employers/Register'
import JobType from '../components/job-types/JobType'
import JobseekerReviews from '../components/reviews/JobseekerReviews'
import { scrollTop } from '../config/scroll-top'




const Homepage = () => {

  useEffect(() => {
    scrollTop(0)
    console.log('running')

    // return(() => {
    //   console.log('cleaning')
    // })
  }, [])

  return (
    <div className='bg-white'>
        <Navrbar />
        <HeroPage />
        {/* <JobType /> */}
        <div className='container mx-auto'>
            <Certifiedby />
        </div>
        <Register />
        <JobType />
        <CreateResume />
        <JobseekerReviews />
        <Footer />
    </div>
  )
}

export default Homepage