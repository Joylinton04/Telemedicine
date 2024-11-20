import { ArrowUpRight, UserPlus } from 'lucide-react';
import React from 'react'

const Home = () => {
  return (
    <div className='p-4 h-[calc(100vh-70px)]'>
      <div className='flex flex-col h-full'>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-2xl font-main3'>👋🏼 Welcome Back, Dr. Adu Atakora!</div>
          <div className='text-sm text-textSoft'>You have access to all the necessary tools and resources to manage your patient care.</div>
        </div>

        {/* grid system */}
        <div className='gridlayout mt-6'>
            <div className='box bg-white flex flex-col justify-between'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-green-400 rounded-lg p-1'><UserPlus strokeWidth={2.75} size={'20px'} className='text-green-500'/></p>
                  <span className='text-sm font-bold'>Patient Record</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-1 items-center'>
                    <span className='font-bold text-3xl'>556</span>
                    <ArrowUpRight size={'12px'} strokeWidth={2.75} className='text-green-500 ml-4'/>
                    <span className='text-xs text-green-500'>142</span> 
                    <span className='text-xs'>last month</span>
                  </div>
                  <div className='w-full flex gap-1'>
                    <div className='rounded h-2 bg-yellow-400 w-[20%]'></div>
                    <div className='rounded h-2 bg-[#29a27c] w-[50%]'></div>
                    <div className='rounded h-2 bg-[#fc3e3ec8] w-[30%]'></div>
                  </div>
                  <div className='flex text-xs items-center gap-3'>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-yellow-400'></div>
                      <div>120 Inpatient</div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-[#29a27c]'></div>
                      <div>330 Outpatient</div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-yellow-400'></div>
                      <div>45 Emergency</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box  bg-white'>
                
            </div>
            <div className='box w-full h-full border border-slate-400 bg-white'></div>
            <div className='box col-span-2 row-span-2 w-full h-full border border-slate-400 bg-white'></div>
            <div className='box row-span-2 w-full h-full border border-slate-400 bg-white'></div>
            <div className='box col-span-3 row-span-2 w-full h-full border border-slate-400 bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default Home;
