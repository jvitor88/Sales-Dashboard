import React from 'react'
import Navbar from '../navbar'
import Userbar from '../Userbar'
import Toggle from '../Toggle'

const Settings = () => {
  return (
    <div className="flex w-screen h-screen bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12">
        <Userbar />
        <div className='flex flex-col items-center justify-center gap-16 h-4/6 mt-5'>
          <h1 className='text-3xl font-bold'>Ajustes</h1>
          <div className='flex gap-16'>
            <ul className='flex flex-col gap-10'>
              <Toggle text={"Lorem ipsum dolor sit amet consectetur"}/>
              <Toggle text={"Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur"}/>
              <Toggle text={"Lorem ipsum dolor sit"}/>
              <Toggle text={"Lorem ipsum "}/>
              <Toggle text={"Lorem ipsum dolor sit amet"}/>
            </ul>
            <ul className='flex flex-col gap-10'>
              <Toggle text={"Lorem ipsum "}/>
              <Toggle text={"Lorem ipsum dolor sit amet consectetur"}/>
              <Toggle text={"Lorem "}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings