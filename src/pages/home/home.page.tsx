import ActivitySection from './components/activity'
import OrdersSection from './components/orders'
import Statistics from './components/statistics'

export default function HomePage() {
   return (
      <div>
         <h2 className='text-2xl text-white'>Dashboard</h2>
         <div className='flex flex-col gap-8'>
            <Statistics />
            <ActivitySection />
            <OrdersSection />
         </div>
      </div>
   )
}
