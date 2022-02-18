import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Profile from './pages/Profile/Profile'
import Garden from './pages/Garden/Garden'
import Home from './pages/Home/Home'
import AddEvent from './pages/admin/AddEvent/AddEvent'
import EditEvent from './pages/admin/EditEvent/EditEvent'
import Error from './components/Error/Error'
import Event from './pages/Event/Event'
import Gardens from './pages/Gardens/Gardens'
import Posts from './pages/Posts/Posts'

import { cacheUser } from './auth-utils'

export default function App() {
  cacheUser(useAuth0)

  return (
    <>
      <Error />
      <Header />
      <main className='container margin-container flex-container centre-flex'>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gardens' element={<Gardens />} />
            <Route path='/gardens/:id' element={<Garden />} />
            <Route path='/gardens/:id/posts' element={<Posts />} />
            <Route path='/gardens/:id/events/:eventId' element={<Event />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/event/new' element={<AddEvent />} />
            <Route path='/events/:id/edit' element={<EditEvent />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}
