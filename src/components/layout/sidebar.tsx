import { NavLink } from 'react-router-dom'

import { MdOutlineHome } from 'react-icons/md'
import { MdOutlineGraphicEq } from 'react-icons/md'
import { GoChecklist } from 'react-icons/go'
import { IoWalletOutline } from 'react-icons/io5'
import { IoBagCheckOutline } from 'react-icons/io5'

export default function Sidebar() {
   return (
      <div className='sidebar fixed left-0 md:top-[72px] bottom-0 w-full md:w-20 z-10 max-md:px-6 bg-primary'>
         <div className='links flex flex-row md:flex-col gap-6 py-4'>
            <NavLink
               to={'/'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'md:fill-[#7494fd] before:content-start md:before:w-1 md:before:h-full before:bg-[#7494fd] before:absolute relative max-md:bg-[#7494fd] max-md:fill-black max-md:p-2 max-md:rounded-full'
                     : 'fill-default-fill stroke-default-stroke max-md:p-2 max-md:rounded-full'
               }
            >
               <MdOutlineHome className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/statistics'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'md:fill-[#7494fd] before:content-start md:before:w-1 md:before:h-full before:bg-[#7494fd] before:absolute relative max-md:bg-[#7494fd] max-md:fill-black max-md:p-2 max-md:rounded-full'
                     : 'fill-default-fill stroke-default-stroke max-md:p-2 max-md:rounded-full'
               }
            >
               <MdOutlineGraphicEq className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/user-list'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'md:fill-[#7494fd] before:content-start md:before:w-1 md:before:h-full before:bg-[#7494fd] before:absolute relative max-md:bg-[#7494fd] max-md:fill-black max-md:p-2 max-md:rounded-full'
                     : 'fill-default-fill stroke-default-stroke max-md:p-2 max-md:rounded-full'
               }
            >
               <GoChecklist className='mx-auto' size={25} fill='inherit' />
            </NavLink>
            <NavLink
               to={'/payments'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'md:fill-[#7494fd] before:content-start md:before:w-1 md:before:h-full before:bg-[#7494fd] before:absolute relative max-md:bg-[#7494fd] max-md:fill-black max-md:stroke-black max-md:p-2 max-md:rounded-full'
                     : 'fill-default-fill stroke-default-stroke max-md:p-2 max-md:rounded-full'
               }
            >
               <IoWalletOutline className='mx-auto' size={25} fill='inherit' stroke='inherit' />
            </NavLink>
            <NavLink
               to={'/items'}
               end
               className={({ isActive }) =>
                  isActive
                     ? 'md:fill-[#7494fd] before:content-start md:before:w-1 md:before:h-full before:bg-[#7494fd] before:absolute relative max-md:bg-[#7494fd] max-md:fill-black  max-md:stroke-black max-md:p-2 max-md:rounded-full'
                     : 'fill-default-fill stroke-default-stroke max-md:p-2 max-md:rounded-full'
               }
            >
               <IoBagCheckOutline className='mx-auto' size={25} fill='inherit' stroke='inherit' />
            </NavLink>
         </div>
         <div className='logout'></div>
      </div>
   )
}
