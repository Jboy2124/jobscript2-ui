import React from 'react'
import Navrbar from '../components/navbar/Navrbar'
import Footer from '../components/footer/Footer'
import HeroPage from '../components/hero/HeroPage'
import Certifiedby from '../components/certification/Certifiedby'
import CreateResume from '../components/create-resume/CreateResume'
import Register from '../components/employers/Register'
import JobType from '../components/job-types/JobType'
import JobseekerReviews from '../components/reviews/JobseekerReviews'



const Homepage = () => {
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