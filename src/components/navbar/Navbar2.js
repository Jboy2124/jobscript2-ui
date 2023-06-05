import React, { useEffect, useState } from 'react'

const Navbar2 = () => {
    const[prevScrollPos, setPrevScrollPos] = useState(0)
    const[visibility, setVisibility] = useState(true)


    function handleScroll(){
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setVisibility(false)
        } else {
            setVisibility(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (
    <div className={`bg-blue-600 sticky ${visibility ? 'top-0 transition ease-in duration-700' : 'transition ease-in duration-700'} z-50`}>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                <div>Logo</div>
                <div>Menu 1</div>
                <div>Menu 2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar2