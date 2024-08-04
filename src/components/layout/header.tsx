import { useState } from 'react'
import { SiBetterstack } from 'react-icons/si'
import { MdMailOutline, MdOutlineSettings, MdOutlineNotifications } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { useEventListener, useSyncedEffect } from 'classic-react-hooks'

import SearchBar from '../common/search-bar'
import useWindowWidth from '../../hooks/use-window-width'
import Hamburger from '../ui/hamburger'
import { getScrollBarWidth } from '../../utils/get-scrollbar-width'
import cn from '../../lib/cn'

export default function Header() {
   const shouldDisplayHamburger = useWindowWidth(() => window.innerWidth < 1024)
   const [shouldShowNav, setShouldNav] = useState(false)
   const [top, setTop] = useState(0)
   useEventListener(
      window,
      'keydown',
      (e) => {
         if (e.key == 'Escape') {
            hideNav()
         }
      },
      { shouldInjectEvent: shouldShowNav }
   )

   const showNav = () => {
      setShouldNav(true)
      document.body.style.setProperty('overflow', 'hidden')
      document.body.style.setProperty('overscroll-behavior', 'contain')
      document.body.style.setProperty('position', 'relative')
      const margin = getScrollBarWidth()
      document.body.style.setProperty('margin-right', margin + 'px')

      // get header height
      const height = document.querySelector('header')?.getBoundingClientRect().height
      setTop(height ?? 0)
   }
   const hideNav = () => {
      setShouldNav(false)
      removeCls()
   }
   const removeCls = () => {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('overscroll-behavior')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('margin-right')
   }
   useSyncedEffect(() => {
      if (!shouldDisplayHamburger) {
         removeCls()
      }
   }, [shouldDisplayHamburger])

   return (
      <header className='flex items-center w-full bg-primary max-w-[2200px] max-md:justify-between mx-auto px-4 md:px-6 py-4 '>
         <div className='logo'>
            <SiBetterstack size={40} />
         </div>
         <SearchBar />
         <div className='actions max-md:hidden  flex gap-3 ml-auto'>
            <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
               <MdMailOutline size={25} />
            </button>
            <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
               <MdOutlineSettings size={25} />
            </button>
            <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
               <MdOutlineNotifications size={25} />
            </button>
            <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary ml-4'>
               <CgProfile size={25} />
            </button>
         </div>

         {/* mobile header */}
         {shouldDisplayHamburger && (
            <>
               <Hamburger
                  isActive={shouldShowNav}
                  onClick={() => {
                     if (shouldShowNav) {
                        hideNav()
                     } else {
                        showNav()
                     }
                  }}
               />
            </>
         )}
         {shouldDisplayHamburger && shouldShowNav && (
            <div className='fixed z-30'>
               <div
                  className='overlay fixed inset-0  bg-[rgba(21,20,25,0.3)] flex flex-col z-20'
                  onClick={hideNav}
               ></div>
               <div
                  className={cn('fixed bottom-0 bg-[#151419] flex flex-col z-20 w-52 right-0 p-4 gap-4')}
                  style={{ top: top + 'px' }}
               >
                  <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
                     <MdMailOutline size={25} />
                  </button>
                  <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
                     <MdOutlineSettings size={25} />
                  </button>
                  <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary'>
                     <MdOutlineNotifications size={25} />
                  </button>
                  <button className='bg-[#434448] p-2 rounded-full w-9 h-9 flex items-center justify-center text-primary mt-auto'>
                     <CgProfile size={25} />
                  </button>
               </div>
            </div>
         )}
      </header>
   )
}
