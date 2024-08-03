import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import HomePage from '../../pages/home/home.page'
import LayoutProvider from './layout.provider'

export default function AppRouterProvider() {
   return (
      <>
         <BrowserRouter>
            <LayoutProvider>
               <Routes>
                  <Route path='/' Component={HomePage} />
                  <Route path='/statistics' Component={HomePage} />
                  <Route path='/user-list' Component={HomePage} />
                  <Route path='/payments' Component={HomePage} />
                  <Route path='/items' Component={HomePage} />
               </Routes>
            </LayoutProvider>
         </BrowserRouter>
      </>
   )
}
