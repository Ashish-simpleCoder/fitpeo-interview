import { useState } from 'react'
import Star from '../ui/star'
import cn from '../../lib/cn'

export default function StarRating({
   size = 5,
   rating_level,
   disabled = true,
}: {
   size?: number
   rating_level: number
   total_rating_feedbacks?: number
   disabled?: boolean
}) {
   const [stars, setStars] = useState(() => [...new Array(size).keys()])
   const [new_level, setNewLevel] = useState<number>(rating_level)

   const onMouseEnter = (id: number) => {
      setNewLevel(id)
   }
   const onMouseOut = () => {
      setNewLevel(rating_level)
   }

   return (
      <div className='flex items-center'>
         {stars.map((i) => {
            return (
               <Star
                  key={i}
                  className={cn(
                     new_level && i + 1 <= new_level ? 'text-[#fcdf30]' : 'text-gray-300',
                     disabled && 'cursor-default'
                  )}
                  {...(!disabled && {
                     onMouseEnter: () => onMouseEnter(i + 1),
                     onMouseOut: onMouseOut,
                     onClick: () => setNewLevel(i + 1),
                  })}
               />
            )
         })}
      </div>
   )
}
