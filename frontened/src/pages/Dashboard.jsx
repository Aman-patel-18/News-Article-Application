import DashboardSidebar from '@/components/shared/DashboardSidebar'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DahboardProfile from './DahboardProfile'
import BottomNavBar from './BottomNavBar'

const Dashboard = () => {
  const location=useLocation()
  const [tab, setTab]= useState("")
  useEffect(()=>{
    const urlParams= new URLSearchParams(location, Search)
    const tabFromUrl=urlParams.get("tab")

    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])


  return (
    <div className='min-h-screen flex flex-col md:flex-row w-full'>
      {/*sidebar*/}
      <div className="hidden md:block">
        <DashboardSidebar/>
      </div>

    <BottomNavBar/>

      {/* profile */}
      <div>
        {tab==="profile" && <DahboardProfile/>}
      </div>
      </div>
  )
}

export default Dashboard