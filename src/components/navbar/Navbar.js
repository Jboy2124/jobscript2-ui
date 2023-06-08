import React from 'react'
import { navMenu } from '../../constants/nav-menu'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


    // const[prevScrollPos, setPrevScrollPos] = useState(0)
    // const[visibility, setVisibility] = useState(true)


    // function handleScroll(){
    //     const currentScrollPos = window.scrollY

    //     if(currentScrollPos > prevScrollPos){
    //         setVisibility(false)
    //     } else {
    //         setVisibility(true)
    //     }

    //     setPrevScrollPos(currentScrollPos)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll)
    // })


  return (
    <div className={`bg-gradient-to-r from-[#0A2647] to-[#205295] sticky top-0 z-50`}>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                <div className='flex justify-start items-center space-x-16 text-[15px]'>
                    <div className='text-white font-poppins text-[30px] font-bold'>Job<span className='text-orange-600'>Script</span>.io</div>
                    <div className='text-[16px] text-white font-poppins flex items-center space-x-6'>
                        {
                            navMenu.map(items => {
                                return (
                                    <NavLink
                                        key={items.id}
                                        to={items.link}
                                        className={({ isActive }) => {
                                            return (
                                                // 'px-3 py-2 rounded-md text-sm font-poppins no-underline ' + 
                                                'px-3 py-2 rounded ' +
                                                (isActive 
                                                    ? 'ring-1 ring-orange-700'
                                                    : 'text-white'                                                     )
                                            )
                                        }}
                                    >
                                        {items.name}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-start items-center space-x-1'>
                    <div className='flex justify-center items-center text-white text-[25px] font-poppins'><ion-icon name="call"></ion-icon></div>
                    <div className='text-[23px] text-white font-poppins pr-5'>(32) 521-7000</div>
                    <button 
                        type='button' 
                        className='rounded-full px-14 py-2 text-white text-[15px] font-poppins bg-orange-600 hover:bg-orange-700 duration-200'>
                            <Link to='/post-job'>Post Jobs</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar