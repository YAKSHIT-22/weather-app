import React from 'react'
import logo from '../../assets/logo.svg'
import Button from './Button'
const Header = ({modelOpen}) => {
  return (
    <header className='w-full flex items-center justify-center'>
        <nav className='w-full flex items-center justify-center px-2'>
            <div className='w-full flex items-center justify-between gap-2'>
                <div className='w-full h-full flex items-center justify-start'>
                    <img src={logo} alt="logo" className='h-auto w-40'/>
                </div>
                <div className='w-full h-full flex items-center justify-end'>
                    <Button element="Add Location" handleEvent={modelOpen} containerStyle='flex items-center justify-start w-[164px]' buttonStyle='text-sm rounded-[6px] py-2 px-6 bg-white text-black hover:bg-transparent hover:text-white border-1 border-transparent hover:border-white transition-all duration-300 font-medium' />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header