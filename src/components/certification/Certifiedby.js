import React from 'react'
import CertificationCard from '../cards/CertificationCard'
import { cert } from '../../constants/certification-list'

const Certifiedby = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-[50vh] flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-3 place-items-center'>
                    {
                        cert.map((items, index) => {
                            return(
                                <div key={index}>
                                    <CertificationCard image={items.image} />
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

export default Certifiedby