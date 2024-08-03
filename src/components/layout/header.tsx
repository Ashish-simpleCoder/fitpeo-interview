import { SiBetterstack } from 'react-icons/si'
import { MdMailOutline, MdOutlineSettings, MdOutlineNotifications } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

import SearchBar from '../common/search-bar'

export default function Header() {
   return (
      <header className='flex items-center w-full bg-primary max-w-[2000px] mx-auto px-6 py-4 '>
         <div className='logo '>
            <SiBetterstack size={40} />
         </div>
         <SearchBar />
         <div className='actions flex gap-3 ml-auto'>
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
      </header>
   )
}
