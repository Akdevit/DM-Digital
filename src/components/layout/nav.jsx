import React from 'react'
import Logo from "../../Images/logo.png"
const nav = () => {
  return (
    <>
      <div className="w-full h-[50px] bg-[#DFD3C3] flex items-center gap-2 pl-4 ">
        <img src={Logo} alt="logo" className="h-10 w-10 rounded-md object-contain" />
        <h1 className='text-2xl font-bold'>DM Digital service point</h1>
      </div>
    </>
  )
}

export default nav
