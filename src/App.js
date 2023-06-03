import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Jobs from './pages/Jobs'
import PostJobs from './pages/PostJobs'
import Careers from './pages/Careers'


const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/careers' element={<Careers />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/post-job' element={<PostJobs />}></Route>
        </Routes>
    </Router>
  )
}

export default App