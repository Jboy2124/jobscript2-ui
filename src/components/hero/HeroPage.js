import React from 'react'
// import IMG from '../../assets/svg/wave-haikei.svg'

const HeroPage = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#0A2647] to-[#205295]'>
        <div className='container mx-auto'>
            <div className='min-h-[70vh] flex justify-center items-center'>
                <div className='grid grid-rows-3 place-items-center'>
                    <div className='text-[52px] text-white font-poppins font-bold'>Job hunting is never been this easy.</div>
                    <div className='text-white text-[16px] font-poppins'>No account?, No problem. Search job all you want.</div>
                    <div className='flex justify-center items-center z-10'>
                      <button className='text-white text-[16px] font-poppins shadow-lg rounded-full px-16 py-2 bg-orange-600 hover:bg-orange-700 duration-200'>Try it now</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,288L120,288C240,288,480,288,720,256C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
  )
}

export default HeroPage