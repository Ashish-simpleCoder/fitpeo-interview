import { MdOutlineHome } from 'react-icons/md'
import { MdOutlineGraphicEq } from 'react-icons/md'
import { GoChecklist } from 'react-icons/go'
import { IoWalletOutline } from 'react-icons/io5'
import { IoBagCheckOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
   return (
      <div className='sidebar fixed left-0 top-[72px] bottom-0 w-20 bg-primary'>
         <div className='links flex flex-col gap-6 py-4'>
            <NavLink
               to={'/'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'fill-[#7494fd] before:content-start before:w-1 before:h-full before:bg-[#7494fd] before:absolute relative'
                     : 'fill-default-fill'
               }
            >
               <MdOutlineHome className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/statistics'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'fill-[#7494fd] before:content-start before:w-1 before:h-full before:bg-[#7494fd] before:absolute relative'
                     : 'fill-default-fill'
               }
            >
               <MdOutlineGraphicEq className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/user-list'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'fill-[#7494fd] before:content-start before:w-1 before:h-full before:bg-[#7494fd] before:absolute relative'
                     : 'fill-default-fill'
               }
            >
               <GoChecklist className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/payments'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'fill-[#7494fd] before:content-start before:w-1 before:h-full before:bg-[#7494fd] before:absolute relative'
                     : 'fill-default-fill'
               }
            >
               <IoWalletOutline className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/items'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'fill-[#7494fd] before:content-start before:w-1 before:h-full before:bg-[#7494fd] before:absolute relative'
                     : 'fill-default-fill'
               }
            >
               <IoBagCheckOutline className='mx-auto' size={25} fill='inherit' />
            </NavLink>
         </div>
         <div className='logout'></div>
      </div>
   )
}
