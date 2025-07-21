import React from 'react'

function Footer() {
  return (
    <footer className='py-6 bg-[#07292F]'>
        <div className='px-12 flex flex-col sm:flex-col md:flex-row items-center justify-between gap-3 sm:gap-3 md:gap-0'>
        <img src='Logo.png'/>
        <p className='text-[#96ACAF] text-[16px]'>Copyright © 2023 Wizia. All rights reserved.</p> 
        </div>
    </footer>
  )
}

export default Footer