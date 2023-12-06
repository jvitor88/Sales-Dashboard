import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../public/main-logo.png'
import { FaGrip, FaMoneyBillWave, FaCartShopping, FaUserGroup, FaGear, FaPowerOff } from "react-icons/fa6";

const Navbar = () => {
  return (
        <aside className='bg-white flex flex-col gap-10 items-center text-xl w-72 rounded-r-3xl z-10'>
            <img className='w-32 mt-10' src={logo} alt="" />
            <ul className='flex flex-col gap-4'>
                <Link to="/dashboard">
                  <li className='flex items-center gap-3 hover:text-primary cursor-pointer'> <FaGrip/> Dashboard</li>
                </Link>
                <Link to="/vendas">
                  <li className='flex items-center gap-3 hover:text-primary cursor-pointer'> <FaMoneyBillWave/> Vendas</li>
                </Link>
                <Link to="/transacoes">
                  <li className='flex items-center gap-3 hover:text-primary cursor-pointer'> <FaCartShopping/> Transações</li>
                </Link>
                <Link to="/suporte">
                  <li className='flex items-center gap-3 hover:text-primary cursor-pointer'> <FaUserGroup/> Suporte</li>
                </Link>
                <Link to="/ajustes">
                  <li className='flex items-center gap-3 hover:text-primary cursor-pointer'> <FaGear/> Ajustes</li>
                </Link>
            </ul>
            <ul className='flex mt-1'>
                <Link to="/sair">
                <button className='flex justify-start items-center gap-3 p-2 rounded-xl text-red-500 hover:bg-red-500 hover:text-white cursor-pointer'> <FaPowerOff/>Sair
                </button>
                </Link>
            </ul>
        </aside>
  )
}

export default Navbar