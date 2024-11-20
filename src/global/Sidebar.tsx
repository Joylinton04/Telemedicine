import { Input } from '@/components/ui/input';
import { BadgeDollarSign, Home, MapPinned, Search, Settings, SquareActivity, User, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const menu = [
    {
      title: 'Main Menu',
      items: [
        {
          title: 'Dashboard',
          path: '/',
          icon: <Home size={'20px'}/>
        },
        {
          title: 'Appointments',
          path: '/',
          icon: <MapPinned size={'20px'}/>
        },
        {
          title: 'Patients',
          path: '/',
          icon: <Users size={'20px'}/>
        },
        {
          title: 'Financial',
          path: '/',
          icon: <BadgeDollarSign size={'20px'}/>
        },
      ]
    },
    {
      title: 'Users',
      items: [
        {
          title: 'Profile',
          path: '/',
          icon: <User size={'20px'}/>
        },
        {
          title: 'Settings',
          path: '/',
          icon: <Settings size={'20px'}/>
        },
      ]
    },
  ]

  return (
    <div className='bg-white p-4 font-main3 w-full border-r border-gray-100 h-screen'>
      <div className='flex flex-col gap-4 h-full'>
        <div className='font-extrabold flex gap-2 items-center'>
          <SquareActivity className='text-green-600' size={'40px'}/>
          <span className='uppercase'>Pluscare</span>
        </div>
        <div className='relative flex'>
          <Input className='h-[35px] pl-7 text-sm' placeholder='Search here...'/>
          <p className='absolute left-[5px] top-[5px]'><Search size={'20px'}/></p>
        </div>

        <div className='flex flex-col gap-6'>
          {menu.map(menu => 
          <div className='flex flex-col gap-2' key={menu.title}>
            <h1 className='font-medium text-slate-500'>{menu.title}</h1>
            {menu.items.map(link => 
              <NavLink to="/" className="flex items-center gap-2 hover:bg-slate-100 py-3 px-4 rounded">
                {link.icon}
                <span className='font-medium text-[15px]'>{link.title}</span>
              </NavLink>
            )}
          </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;