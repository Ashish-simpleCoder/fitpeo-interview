import { RiSearchLine } from 'react-icons/ri'

export default function SearchBar() {
   return (
      <div
         className='search-bar relative ml-10 items-center flex w-[240px] h-9 border border-[#333439] rounded-md'
         role='textbox'
      >
         <RiSearchLine size={20} className='z-10 ml-2' fill='#b1b2b7' />
         <input
            type='text'
            className='absolute w-full h-full -z-1 ps-10 pr-2 bg-[#2a2b30] text-primary rounded-md'
            placeholder='Search'
         />
      </div>
   )
}
