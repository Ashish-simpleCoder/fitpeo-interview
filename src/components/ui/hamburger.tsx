import type { ComponentProps } from 'react'
import cn from '../../lib/cn'

export default function Hamburger({
   onClick,
   isActive,
}: Pick<ComponentProps<'div'>, 'onClick'> & { isActive?: boolean }) {
   return (
      <div
         className={cn('hamburger flex flex-col gap-1 cursor-pointer', isActive && 'active-hamburger')}
         onClick={onClick}
      >
         <div className='l1 bg-white h-[2px] w-6 rounded-full'></div>
         <div className='l2 bg-white h-[2px] w-6  rounded-full'></div>
         <div className='l3 bg-white h-[2px] w-6  rounded-full'></div>
      </div>
   )
}
