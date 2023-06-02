import React from 'react'

const Register = () => {
  return (
    <div className='relative bg-gray-200'>
        {/* <svg className='absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,106.7C96,85,192,43,288,37.3C384,32,480,64,576,112C672,160,768,224,864,256C960,288,1056,288,1152,250.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        <div className='container mx-auto'>
            <div className='min-h-[80vh] flex justify-evenly items-center'>
                <div className='w-full text-[55px] text-center font-poppins'>We are <span className='text-orange-600 font-bold'>trusted</span> by most companies. <span className='text-orange-600 font-bold'>Advertise</span> with us.</div>
                <div className='w-full flex justify-center items-center'>
                    <div className='rounded w-[400px] h-[430px] ring-8 shadow-2xl ring-white bg-gradient-to-r from-[#0A2647] to-[#205295] pt-16 z-10'>
                        <div className='text-center text-white text-[22px] font-poppins pb-5'>Employers / Post Jobs</div>
                        <div className='flex justify-center items-center px-12 py-[5px]'>
                            <input type='email' className='w-full text-[15px] font-poppins px-2 py-[5px] outline-none' placeholder='email@example.com'></input>
                        </div>
                        <div className='flex justify-center items-center px-12 py-[5px]'>
                            <input type='password' className='w-full text-[15px] font-poppins px-2 py-[5px] outline-none' placeholder='Password'></input>
                        </div>
                        <div className='flex justify-center items-center px-12 py-[5px]'>
                            <input type='password' className='w-full text-[15px] font-poppins px-2 py-[5px] outline-none' placeholder='Re-type Password'></input>
                        </div>
                        <div className='flex justify-start items-center px-12 pt-3 space-x-4'>
                            <input type='checkbox' placeholder=''></input>
                            <label className='text-[12px] text-white font-poppins'>I have read and agree to <span className='text-orange-600 hover:cursor-pointer'>Terms of Use</span> and <span className='text-orange-600 hover:cursor-pointer'>Privacy Policy</span>.</label>
                        </div>
                        <div className='flex justify-center items-center px-12 pt-8'>
                            <button className='rounded-full px-14 py-2 bg-orange-600 hover:bg-orange-700 duration-200 shadow-xl text-white text-[15px] font-poppins'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,176C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default Register