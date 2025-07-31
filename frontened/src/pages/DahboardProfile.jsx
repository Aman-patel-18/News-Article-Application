import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useSelector } from 'react-redux'

const DahboardProfile = () => {
  const {currentUser}= useSelector((state)=>state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>
        Update your Profile
        </h1>
        <form className='flex flex-col gap-4'>
          <div className='w-32 h-32 self-center cursor-pointer overflow-hidden'>
            <img src={currentUser.profilePicture} alt="" className='rounded-full w-full h-full object-cover border-8 border-slate-300'/>
          </div>
          <Input type="text" 
                 id="username"
                 placeholder="username"
                 defaultValue={currentUser.username}
                 className="h-12 border border-slate-400 focus-visible:ring-offset-0"/>

          <Input type="email" 
                 id="email"
                 placeholder="@gmail.com"
                 defaultValue={currentUser.email}
                 className="h-12 border border-slate-400 focus-visible:ring-offset-0"
                 //disabled
                 />

          <Input type="password" 
                 id="password"
                 placeholder="********"
                 className="h-12 border border-slate-400 focus-visible:ring-offset-0"/>
          <Button type="submit" className="h-12 bg-green-600">Update Profile</Button>
        </form>
        <div className='flex text-red-400 justify-between cursor-pointer mt-5'>
          <span className="hover:text-red-700 cursor-pointer">Delete Profile</span>
          <span className="hover:text-red-700  cursor-pointer">Log out</span>
        </div>
    </div>
  )
}

export default DahboardProfile