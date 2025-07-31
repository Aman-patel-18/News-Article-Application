import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavBar = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-200 border-t border-slate-300 px-2 py-1 flex justify-around items-center h-12">
  <Link to="/" className="flex flex-col items-center text-slate-800 justify-center flex-1">
    <span className="text-xs">Home</span>
  </Link>

  <div className="w-px h-full bg-slate-700" />

  <Link to="/dashboard?tab=profile" className="flex flex-col items-center text-slate-800 justify-center flex-1">
    <span className="text-xs">Profile</span>
  </Link>

  <div className="w-px h-full bg-slate-700" />

  <button className="flex flex-col items-center text-slate-800 justify-center flex-1">
    <span className="text-xs">Logout</span>
  </button>
</nav>

  )
}

export default BottomNavBar