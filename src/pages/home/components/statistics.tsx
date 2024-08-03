import { FaShoppingCart } from 'react-icons/fa'
import { IoBagCheck } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'

import StatusIndicator from '../../../components/common/status-indicator'
// import CircularBar from '../../../components/common/circular-bar'

export default function Statistics() {
   return (
      <div className='gap-6 w-full grid xl:grid-cols-3'>
         <div className='gap-4 grid md:grid-cols-2 xl:grid-cols-4 w-full md:col-span-2'>
            <div className='bg-primary rounded-md p-3 flex flex-col'>
               <span className='bg-[#2d336d] w-10 h-10  rounded-lg flex items-center justify-center'>
                  <FaShoppingCart size={22} className='fill-[#4064fe]' />
               </span>

               <p className='text-sm mt-1 text-white'>Total Orders</p>

               <div className='flex justify-between mt-3'>
                  <p className='text-2xl text-white font-bold'>75</p>
                  <StatusIndicator>
                     <span>3%</span>
                  </StatusIndicator>
               </div>
            </div>

            <div className='bg-primary rounded-md p-3 flex flex-col'>
               <span className='bg-[#175548] w-10 h-10  rounded-lg flex items-center justify-center'>
                  <IoBagCheck size={22} className='fill-[#01ca8c]' />
               </span>

               <p className='text-sm mt-1 text-white'>Total Delivered</p>

               <div className='flex justify-between mt-3'>
                  <p className='text-2xl text-white font-bold'>98</p>
                  <StatusIndicator status='down'>
                     <span>5%</span>
                  </StatusIndicator>
               </div>
            </div>

            <div className='bg-primary rounded-md p-3 flex flex-col'>
               <span className='bg-[#5f3536] w-10 h-10  rounded-lg flex items-center justify-center'>
                  <IoBagCheck size={22} className='fill-[#f25f5f]' />
               </span>

               <p className='text-sm mt-1 text-white'>Total Cancelled</p>

               <div className='flex justify-between mt-3'>
                  <p className='text-2xl text-white font-bold'>75</p>
                  <StatusIndicator>
                     <span>10%</span>
                  </StatusIndicator>
               </div>
            </div>

            <div className='bg-primary rounded-md p-3 flex flex-col'>
               <span className='bg-[#572a4a] w-10 h-10  rounded-lg flex items-center justify-center'>
                  <MdOutlineAttachMoney size={22} className='fill-[#d9489e]' />
               </span>

               <p className='text-sm mt-1 text-white'>Total Revenue</p>

               <div className='flex justify-between mt-3'>
                  <p className='text-2xl text-white font-bold'>$12K</p>
                  <StatusIndicator>
                     <span>23%</span>
                  </StatusIndicator>
               </div>
            </div>
         </div>

         {/* net-profit */}
         <div className='flex bg-primary p-3 rounded-lg'>
            <div className='flex flex-col justify-between'>
               <p className='text-white text-sm'>Net Profit</p>
               <p className='text-white text-3xl font-bold'>$ 3861.45</p>
               <StatusIndicator>
                  <span>5%</span>
               </StatusIndicator>
            </div>
            <div>{/* <CircularBar /> */}</div>
         </div>
      </div>
   )
}
