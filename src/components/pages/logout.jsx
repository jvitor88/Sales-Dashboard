import React from 'react'
import { Link } from 'react-router-dom'
import Userbar from '../Userbar'
import Navbar from '../navbar'

const Logout = ({ userEmail }) => {
  return (
    <div className="flex w-screen h-screen bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12">
        <Userbar userEmail={userEmail} />
        <div className='flex flex-col items-center justify-center gap-8 mt-5 h-4/6'>
          <div className='flex flex-col justify-center items-center gap-8 bg-red-600 w-96 h-40 rounded-2xl'>
            <span className='text-white text-xl'>Deseja mesmo sair?</span>
            <div className='flex gap-8'>
              <Link to="/"><button className='bg-white p-3 rounded-xl w-16 text-lg font-bold hover:opacity-90'>Sim</button></Link>
              <Link to="/dashboard"><button className='bg-white p-3 rounded-xl w-16 text-lg font-bold hover:opacity-90'>Não</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout