import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PostJobs from './pages/PostJobs'
import Careers from './pages/Careers'
import LoadingPage from './pages/LoadingPage'
// import ErrorFallBack from './components/fallback/ErrorFallBack'

// import { ErrorBoundary } from 'react-error-boundary'
const Homepage = lazy(() => import('./pages/Homepage'))
const Jobs = lazy(() => import('./pages/Jobs'))


const App = () => {
  // const navigate = useNavigate()

  return (
    <Router>
        <Routes>
            <Route exact path='/' element={
              <Suspense fallback={<LoadingPage />}>
                <Homepage />
              </Suspense> 
            }>
            </Route>
            <Route path='/jobs' element={ 
              <Suspense fallback={<LoadingPage />}>
                <Jobs />
              </Suspense> 
            }>
            </Route>
            <Route path='/careers' element={<Careers />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/post-job' element={<PostJobs />}></Route>
        </Routes>
    </Router>
  )
}

export default App