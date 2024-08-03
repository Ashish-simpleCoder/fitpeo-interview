import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { BiDish } from 'react-icons/bi'
import { FaBowlFood } from 'react-icons/fa6'
import { GoGoal } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../../../components/ui/select'

export default function ActivitySection() {
   return (
      <div className='gap-6 w-full grid xl:grid-cols-3 '>
         <div className='md:col-span-2 p-4 bg-primary rounded-lg'>
            <div className='flex justify-between items-center'>
               <p className='text-2xl text-white'>Activity</p>
               <Select defaultValue='weekly'>
                  <SelectTrigger className='w-[100px] bg-[#4b4c51] border-0 rounded-full text-white'>
                     <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#4b4c51] text-white'>
                     <SelectGroup>
                        <SelectItem value='yearly'>yearly</SelectItem>
                        <SelectItem value='weekly'>weekly</SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div className='h-52 mt-6'>
               <Example />
            </div>
         </div>
         <div className='p-4 flex flex-col gap-4 bg-primary rounded-lg'>
            <div className='flex justify-between items-center'>
               <div className='flex gap-3 items-center'>
                  <div className='w-16 h-16 rounded-full bg-[#5f3237] flex items-center justify-center'>
                     <GoGoal fill='#e86f3a' size='26' />
                  </div>
                  <p className='text-white text-lg'>Goals</p>
               </div>
               <button className='bg-[#4b4c51] rounded-full p-1.5 text-white'>
                  <IoIosArrowForward />
               </button>
            </div>

            <div className='flex justify-between items-center'>
               <div className='flex gap-3 items-center'>
                  <div className='w-16 h-16 rounded-full bg-[#283364] flex items-center justify-center'>
                     <FaBowlFood fill='#7289d7' size='26' />
                  </div>
                  <p className='text-white text-lg'>Popular Dishes</p>
               </div>
               <button className='bg-[#4b4c51] rounded-full p-1.5 text-white'>
                  <IoIosArrowForward />
               </button>
            </div>

            <div className='flex justify-between items-center'>
               <div className='flex gap-3 items-center'>
                  <div className='w-16 h-16 rounded-full bg-[#214a60] flex items-center justify-center'>
                     <BiDish fill='#36a2ce' size='26' />
                  </div>
                  <p className='text-white text-lg'>Menu</p>
               </div>
               <button className='bg-[#4b4c51] rounded-full p-1.5 text-white'>
                  <IoIosArrowForward />
               </button>
            </div>
         </div>
      </div>
   )
}

const data = [
   {
      name: 'Mon',
      uv: 4000,
      pv: 2400,
      amt: 2400,
   },
   {
      name: 'Tue',
      uv: 3000,
      pv: 1398,
      amt: 2210,
   },
   {
      name: 'Wed',
      uv: 2000,
      pv: 9800,
      amt: 2290,
   },
   {
      name: 'Thu',
      uv: 2780,
      pv: 3908,
      amt: 2000,
   },
   {
      name: 'Fri',
      uv: 1890,
      pv: 4800,
      amt: 2181,
   },
   {
      name: 'Sat',
      uv: 2390,
      pv: 3800,
      amt: 2500,
   },
   {
      name: 'Sun',
      uv: 3490,
      pv: 4300,
      amt: 2100,
   },
]

function Example() {
   return (
      <ResponsiveContainer width='100%' height='100%'>
         <BarChart
            width={500}
            height={208}
            data={data}
            margin={{
               left: 0,
            }}
            // cy={0}
         >
            <CartesianGrid vertical={false} strokeDasharray='1 0' stroke='#3e3e46' />
            <XAxis dataKey='name' stroke='#3e3e46' />
            <YAxis range={[0, 5000, 10000, 15000]} axisLine={false} tickLine={false} />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey='pv' fill='#8884d8' radius={100} />
            <Bar dataKey='uv' fill='#82ca9d' radius={100} strokeWidth={'1px'} />
         </BarChart>
      </ResponsiveContainer>
   )
}
