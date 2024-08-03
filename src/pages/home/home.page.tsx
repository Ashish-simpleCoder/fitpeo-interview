import ActivitySection from './components/activity'
import Statistics from './components/statistics'

export default function HomePage() {
   return (
      <div>
         <h2 className='text-2xl text-white'>Dashboard</h2>
         <div className='flex flex-col gap-8'>
            <Statistics />
            <ActivitySection />
         </div>
      </div>
   )
}
