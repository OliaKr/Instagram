import { Profile } from './cmps/profie.jsx'
import { HomePage } from './pages/home-page'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { Sidebar } from './cmps/sidebar.jsx'

import { loadUsers, fetchCurrentUser } from './store/user.action'
import { BottomTabNavigation } from './cmps/bottom-navigator.jsx'
import SearchDrawer from './cmps/search-drawer.jsx'
import NotificationsDrawer from './cmps/notifications-drawer.jsx'
import { loadStories } from './store/story.actions.js'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

export function App() {
  const navigate = useNavigate()
  useEffect(() => {
    loadUsers()
    loadStories()
    fetchCurrentUser()
    navigate('/instagram')
  }, [])

  return (
    <div className='app-container'>
      <Sidebar />
      <SearchDrawer />
      <NotificationsDrawer />
      <Routes>
        <Route
          exact
          path='/instagram/'
          element={<HomePage />}
        />
        <Route
          exact
          path='/instagram/create'
          element={<HomePage />}
        />
        <Route
          exact
          path='/instagram/search'
          element={<HomePage />}
        />
        <Route
          exact
          path='/instagram/notifications'
          element={<HomePage />}
        />
        <Route
          path='/instagram/:username'
          element={<Profile />}
        />
      </Routes>
      <BottomTabNavigation />
    </div>
  )
}
