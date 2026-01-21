import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom'
import Home from './pages/Home' 
import MainLayout from './layouts/MainLayout'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import HomeChef from './pages/HomeChef'
import  CareTaker  from './pages/CareTaker'
import EventEntertainment from './pages/EventEntertainment'
import ActingDriver from './pages/ActingDriver'
import InstantAutoMobileRepair from './pages/InstantAutoMobileRepair'
import Subscription from './pages/SubscriptionPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='contact-us' element={<ContactPage />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='subscription' element={<Subscription/>}/>

        <Route path="*" element={<NotFound />} />
        {/*service */}
        <Route path='home-chef' element={< HomeChef/>}/>
        <Route path='care-taker' element={< CareTaker/>}/>
        <Route path='event-entertainment' element={< EventEntertainment/>}/>
        <Route path='acting-driver' element={< ActingDriver/>}/>
        <Route path='auto-repair' element={< InstantAutoMobileRepair/>}/>







      </Route>

    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
