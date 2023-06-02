import React from 'react'
import { jobType } from '../../constants/job-type'
import ExploreJobsCard from '../cards/ExploreJobsCard'

const JobType = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-center pt-16 text-black text-[32px] font-poppins'>Choose what's right for you</div>
            <div className='min-h-[80vh] flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-5 place-items-center'>
                    {
                        jobType.map((item, index) => {
                            return(
                                <div key={index}>
                                    <ExploreJobsCard name={item.name} backColor={item.backColor} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobType