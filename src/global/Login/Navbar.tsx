import { Button } from '@/components/ui/button';
import { SquareActivity } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='flex justify-center items-center text-white h-[75px]'>
      <div className='flex justify-between items-center widlimit wid'>
        <div className='font-extrabold flex gap-2 items-center'>
            <SquareActivity className='text-white' size={'40px'}/>
            <span className='uppercase text-lg'>Pluscare</span>
        </div>
        <ul className='flex gap-6 font-medium ssm:hidden mdd:text-sm'>
          <li className='scale-125'><a href="#home" className='text-green-500 font-bold'>Home</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='flex'>
          <Button className='text-white bg-blue-600 px-6'><NavLink to="/login"> Login</NavLink></Button>
          <Button className='ml-4 text-white bg-red-500 px-6'><NavLink to="/register"> Register</NavLink></Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
