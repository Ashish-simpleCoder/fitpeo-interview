import { useState } from 'react'

import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../../components/common/table'
import Tag from '../../../components/common/tag'

export default function OrdersSection() {
   const [orders, setOrders] = useState([
      {
         id: 1,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Wade Warren',
         order_id: '15478256',
         amount: '$124.00',
         status: 'Delivered',
      },
      {
         id: 2,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Jane Cooper',
         order_id: '15478256',
         amount: '$124.00',
         status: 'Delivered',
      },
      {
         id: 3,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Guy Hawkins',
         order_id: '15478256',
         amount: '$124.00',
         status: 'Cancelled',
      },
      {
         id: 4,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Kristin Watson',
         order_id: '15478256',
         amount: '$124.00',
         status: 'Delivered',
      },
      {
         id: 5,
         profile_img: 'https://avatars.githubusercontent.com/u/1?v=4',
         name: 'Cody Fisher',
         order_id: '15478256',
         amount: '$124.00',
         status: 'Cancelled',
      },
   ])

   return (
      <div className='gap-6 w-full grid xl:grid-cols-3 '>
         <div className='md:col-span-2 p-4 bg-primary rounded-lg'>
            <div className='flex justify-between items-center mb-6'>
               <p className='text-2xl text-white'>Recent Orders</p>
            </div>
            <Table>
               <TableHeader>
                  <TableRow className='border-b-[#3e3e46]'>
                     <TableCell className='text-white font-medium text-sm'>Customers</TableCell>
                     <TableCell className='text-white font-medium text-sm'>Order No.</TableCell>
                     <TableCell className='text-white font-medium text-sm'>Amount</TableCell>
                     <TableCell className='text-white font-medium text-sm'>Status</TableCell>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {orders.map((order) => {
                     return (
                        <TableRow key={order.id} className='border-b-[#3e3e46] text-white font-light'>
                           <TableCell className='flex  items-center gap-3 '>
                              <img src={order.profile_img} className='w-8 h-8 md:w-10 md:h-10 rounded-full' alt='' />
                              <span>{order.name}</span>
                           </TableCell>
                           <TableCell>{order.order_id}</TableCell>
                           <TableCell>{order.amount}</TableCell>
                           <TableCell>
                              {order.status == 'Delivered' && <Tag>{order.status}</Tag>}
                              {order.status == 'Cancelled' && <Tag type='cancelled'>{order.status}</Tag>}
                           </TableCell>
                        </TableRow>
                     )
                  })}
               </TableBody>
            </Table>
         </div>
      </div>
   )
}
