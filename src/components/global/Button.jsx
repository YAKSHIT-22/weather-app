import React from 'react'

const Button = ({containerStyle="w-full", type="button", handleEvent=()=>{console.trace("Button Clicked")}, buttonStyle="px-4 py-2 bg-white text-black font-medium ", element="Submit"}) => {
  return (
    <div className={`${containerStyle}`}>
        <button type={type} onClick={handleEvent} className={`${buttonStyle}`}>{element}</button>
    </div>
  )
}

export default Button