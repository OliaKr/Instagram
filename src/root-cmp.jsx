import { Profile } from './cmps/profie.jsx'
import { HomePage } from './pages/home-page'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { Sidebar } from './cmps/sidebar.jsx'



import { loadUsers } from './store/user.action'



export function App() {

useEffect(() => {

  loadUsers()


}, [])

  return (
    <div className='app-container'>
    {/* <main> */}
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<HomePage />} />
        </Routes>
    {/* </main> */}
    </div>
)
}