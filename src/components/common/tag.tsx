import { PropsWithChildren } from 'react'

import cn from '../../lib/cn'

const TagTypes = {
   success: {
      className: 'bg-[#175447] text-[#60e6c1]',
   },
   cancelled: {
      className: 'bg-[#5b3736] text-[#ff6c7b]',
   },
}

export default function Tag({ type = 'success', children }: { type?: keyof typeof TagTypes } & PropsWithChildren) {
   return <span className={cn('rounded-full px-2 md:px-3 py-[2px] text-sm', TagTypes[type].className)}>{children}</span>
}
