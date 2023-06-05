import React from 'react'
import {supportServices, supportMenu} from '../../constants/footer-menu'
import { Link, useNavigate } from 'react-router-dom'
import SEC from '../../assets/certification-logo/SEC-logo.png'
import ISO from '../../assets/certification-logo/ISO-Logo.png'

const Footer = () => {
  const navigate = useNavigate()

  function handleIndex(i){
    switch(i){
      case 0:
        break;
      case 1:
        break;
      case 2:
        setTimeout(() => {
          navigate('/careers')
        }, 500)
        break;
      case 3:
        break;
      default:
        return;
    }
  }

  return (
    <div className='relative bg-gradient-to-r from-[#0A2647] to-[#205295]'>
        {/* <svg className='absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,0L80,10.7C160,21,320,43,480,90.7C640,139,800,213,960,229.3C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        <div className='container mx-auto'>
            <div className='min-h-[40vh] flex justify-evenly items-start py-16'>
                <div className='w-full flex flex-col justify-center items-center space-y-2'>
                 <div className='text-white text-[25px] font-poppins'>Newsletter</div>
                 <div className='text-white text-[13px] font-poppins'>Get the latest updates and trends</div>
                 <div className='w-full flex justify-center items-center px-2'>
                    <input type='email' placeholder='email@example.com' className='w-full py-2 px-2 text-[14px] font-poppins outline-none rounded-l'></input>
                    <div className='text-white text-[14px] font-poppins bg-orange-600 py-2 px-5 rounded-r hover:cursor-pointer hover:bg-orange-700 duration-300'>Subscribe</div>
                 </div>
                </div>
                <div className='w-full flex flex-col items-center z-20'>
                  <div className='flex justify-center items-center text-white text-[25px] font-poppins pb-3'>Support</div>
                  <div className='flex justify-start items-center space-x-16 text-white text-[13px] font-poppins'>
                    <ul className='space-y-1'>
                      {
                        supportMenu.map((item, index) => {
                          return(
                            <li  key={index} className='hover:underline underline-offset-4'>
                              <Link to={item.link}>{item.name}</Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <ul className='space-y-1'>
                     {
                      supportServices.map((items, index) => {
                        return(
                          <li 
                            key={index} 
                            onClick={() => handleIndex(index)}
                            className='hover:cursor-pointer hover:underline underline-offset-4'>
                              {items}
                          </li>
                        )
                      })
                     }
                    </ul>
                  </div>
                 
                </div>
               <div className='w-full flex flex-col items-center z-30'>
                    <div className='text-white text-[25px] font-poppins'>Follow Us</div>
                    <div className='flex justify-center items-center space-x-3 pb-3'>
                      <div className='text-[28px] text-white hover:text-orange-600 duration-200 hover:cursor-pointer'><ion-icon name="logo-facebook"></ion-icon></div>
                      <div className='text-[28px] text-white hover:text-orange-600 duration-200 hover:cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></div>
                      <div className='text-[28px] text-white hover:text-orange-600 duration-200 hover:cursor-pointer'><ion-icon name="logo-twitter"></ion-icon></div>
                      <div className='text-[28px] text-white hover:text-orange-600 duration-200 hover:cursor-pointer'><ion-icon name="logo-youtube"></ion-icon></div>
                    </div>
                    {/* <div className='text-white text-[24px] font-poppins'>Accredited</div> */}
                    {/* <div className='flex justify-evenly items-center space-x-1'>
                      <div className='w-36 h-20 flex justify-center items-center'>
                        <img src={SEC} alt='SEC' />
                      </div>
                      <div className='w-36 h-20 flex justify-center items-center'>
                        <img src={ISO} alt='ISO'/>
                      </div>
                    </div> */}
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer