import { useAppSelector } from '@/redux/store';
import { SquareActivity, User } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  const user = useAppSelector(state => state.currentUser)

  return (
    <div className='h-[70px] p-4 bg-white border-b border-gray-100 sticky top-0 z-20'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold uppercase ssm:hidden'>Dashboard</span>
          <div className='font-extrabold flex gap-2 items-center sm:hidden'>
            <SquareActivity className='text-green-600' size={'40px'}/>
            <span className={`uppercase`}>Pluscare</span>
          </div>
        <div className="flex items-center justify-center gap-4 bg-slate-100 px-2 py-1 rounded ssm:gap-2">
            <div className="w-7 h-7 rounded-full">
              <User/>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-maintext text-sm font-semibold ssm:text-xs">{user?.isDoctor? 'Dr': (user?.gender == 'Male'? 'Mr' : 'Mr')}. {user?.Lastname}</h1>
              <p className="text-softText text-xs ssm:text-[9px]">{user?.email}</p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Navbar;
