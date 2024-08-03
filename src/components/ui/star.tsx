import { ComponentPropsWithoutRef } from 'react'
import cn from '../../lib/cn'

export default function Star(props: ComponentPropsWithoutRef<'span'>) {
   const { className, children, ...rest } = props
   return (
      <span className={cn('text-[1.5rem] text-gray-300 cursor-pointer', className)} {...rest}>
         {children ?? '★'}
      </span>
   )
}
