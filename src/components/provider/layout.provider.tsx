import { PropsWithChildren } from 'react'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'

export default function LayoutProvider(props: PropsWithChildren) {
   return (
      <>
         <Header />
         <Sidebar />
         <div className='main-content left-20 relative w-[calc(100%-80px)] p-6'>{props.children}</div>
      </>
   )
}
