import React, { useState } from 'react'
import Navbar from './Small/Navbar'
import Button from './Small/Button'
import { motion } from 'framer-motion'

const Page1 = () => {

   const [val,setval] =  useState(false);

  return (
    <div className='w-full h-screen bg-[#F8F7F4] relative'>
        <Navbar setval={setval} />
        <motion.div initial={{y:"-10%" , opacity:0}} animate={{y:val ? 0 : "-10%",opacity: val ? 1 : 0}} transition={{duration:0.1}} className='absolute w-[21vw] h-[12vw] rounded-3xl top-20 left-40 p-6 text-[#565564] bg-white font-[p]'>
            <div className='mb-2'>
                <h1>Designer Search</h1>
                <p className='text-sm'>Quickly find your next designer</p>
            </div>
            <div >
                <h1>Post a job</h1>
                <p className='text-sm'>The #1 job board for design talent</p>
            </div>
        </motion.div>
        <div className=' mt-20 w-full flex flex-col items-center gap-8'>
            <div className='px-5 font-[hero] py-2 bg-[#E9B3ED] rounded-full w-fit'><span>Over 3 million ready to work creatives!</span></div>
            <h1 className='text-[5.6vw] leading-none text-center font-[hero]'>The world's destination <br /> for design</h1>
            <p className='text-xl font-[p]'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
            <Button title={"Get started"} />
        </div>
    </div>
  )
}

export default Page1