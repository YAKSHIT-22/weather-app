import React from 'react'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full py-4'>
        <div className='flex items-center justify-center text-white'>Copyright @ {year} All Right Reserved</div>
    </footer>
  )
}

export default Footer