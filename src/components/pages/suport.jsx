import React from 'react'
import { FaHeadset, FaComment, FaEnvelope } from "react-icons/fa";
import Navbar from '../navbar';
import Userbar from '../Userbar';

const Suport = () => {
  return (
    <div className="flex w-screen h-screen bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12 h-screen">
        <Userbar />
        <div className='flex flex-col items-center justify-around h-4/6 mt-5'>
          <h1 className='text-3xl font-bold'>Entre em contato conosco!</h1>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-6 items-center bg-white w-80 p-10 text-9xl rounded-xl cursor-pointer hover:scale-110'><FaHeadset /> <span className='text-3xl'>Telefone</span></div>
            <div className='flex flex-col gap-6 items-center bg-white w-80 p-10 text-9xl rounded-xl cursor-pointer hover:scale-110'><FaComment /> <span className='text-3xl'>Chat</span></div>
            <div className='flex flex-col gap-6 items-center bg-white w-80 p-10 text-9xl rounded-xl cursor-pointer hover:scale-110'><FaEnvelope /><span className='text-3xl'>E-mail</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suport