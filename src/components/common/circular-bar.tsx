export default function CircularBar() {
   return (
      <div className='progress-bar relative h-40 w-40'>
         <div className='absolute w-full h-full rounded-full' style={{ backgroundColor: '#283268' }}></div>
         <div
            className='rotate w-full h-full rounded-full absolute'
            style={{ backgroundColor: '#6f95fb', transform: 'rotate(90deg)' }}
         ></div>
         <div className='w-full h-full rounded-full absolute'>
            <span className='!bg-primary'>75%</span>
         </div>
      </div>
   )
}
