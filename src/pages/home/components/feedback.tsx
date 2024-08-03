import { useState } from 'react'
import StarRating from '../../../components/common/start-rating'

export default function FeedbackSection() {
   const [feedbacks, setFeedbacks] = useState([
      {
         id: 1,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Wade Warren',
         description: 'The food was excellent and so was the service.',
         rating: 4,
      },
      {
         id: 2,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Jane Cooper',
         description: 'The food was excellent and so was the service.',
         rating: 3,
      },
      {
         id: 3,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Guy Hawkins',
         description: 'The food was excellent and so was the service.',
         rating: 2,
      },
      {
         id: 4,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Kristin Watson',
         description: 'The food was excellent and so was the service.',
         rating: 5,
      },
      {
         id: 5,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Cody Fisher',
         description: 'The food was excellent and so was the service.',
         rating: 4,
      },
   ])

   return (
      <div className=' p-4 bg-primary rounded-lg h-[450px] overflow-hidden'>
         <div className='flex justify-between items-center mb-6'>
            <p className='text-2xl text-white'>Customer's 'Feedback</p>
         </div>
         <div className='flex flex-col overflow-auto h-[calc(100%-40px)] pb-4 divide-y-[1px] divide-[#3e3e46] [&_>div]:py-4 [&_>div:nth-child(1)]:pt-0'>
            {feedbacks.map((feedback) => {
               return (
                  <div key={feedback.id} className=''>
                     <div className='flex items-center gap-2'>
                        <img src={feedback.profile_img} className='w-8 h-8 md:w-10 md:h-10 rounded-full' alt='' />
                        <span className='text-white'>{feedback.name}</span>
                     </div>
                     <StarRating rating_level={feedback.rating} />
                     <p className='text-sm'>{feedback.description}</p>
                  </div>
               )
            })}
         </div>
      </div>
   )
}
