import type { PropsWithChildren } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'

import cn from '../../lib/cn'

const StatusStyles = {
   up: {
      className: 'text-green-500',
      icon: FaLongArrowAltUp,
   },
   down: {
      className: 'text-red-500',
      icon: FaLongArrowAltDown,
   },
}

export default function StatusIndicator({
   status = 'up',
   children,
}: { status?: keyof typeof StatusStyles } & PropsWithChildren) {
   const Icon = StatusStyles[status]

   return (
      <span className={cn(Icon.className, 'flex gap-1 items-center')}>
         <Icon.icon />
         {children}
      </span>
   )
}
