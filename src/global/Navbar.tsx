import { User } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[70px] p-4 bg-white border-b border-gray-100 sticky top-0 z-30'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold uppercase'>Dashboard</span>
        <div className="flex items-center justify-center gap-4 bg-slate-100 px-2 py-1 rounded ssm:hidden">
            <div className="w-7 h-7 rounded-full">
              <User/>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-maintext text-sm font-semibold">Dr. Adu Atakora</h1>
              <p className="text-softText text-xs">atakora192@gmail.com</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
