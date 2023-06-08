import React from 'react'
import { navMenu } from '../../constants/nav-menu'
import { NavLink } from 'react-router-dom'

const NavbarFinal = () => {
  return (
    <div className={`bg-gradient-to-r from-[#0A2647] to-[#205295] sticky top-0 z-20`}>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                <div className='flex justify-start items-center space-x-10'>
                    <div>Logo</div>
                    <div className='text-white text-[15px] font-poppins flex space-x-6'>
                        {
                            navMenu.map(items => {
                                return(
                                    <NavLink
                                        key={items.id}
                                        to={items.link}
                                        className={({ isActive }) => {
                                            return (
                                                'px-3 py-2 rounded-md text-sm font-poppins no-underline ' + 
                                                (!isActive 
                                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                                    : 'bg-gray-900 text-white'
                                                )
                                            );
                                        }}
                                    >
                                        {items.name}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div>Secondary Menu</div>
            </div>
        </div>
    </div>
  )
}

export default NavbarFinal