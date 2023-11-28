import React from 'react'
import TransactionHistory from '../TransactionHistory'
import { FaSearch } from "react-icons/fa";
import Userbar from '../Userbar';
import Navbar from '../navbar';

const Transactions = () => {
  return (
    <div className="flex w-screen h-screen bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12">
        <Userbar />
        <div className='flex flex-col items-center justify-center gap-5 mt-5'>
          <h1 className='text-3xl font-bold'>Histórico de Transações</h1>
          <div className='flex items-center justify-center w-8/12'>
            <label class="relative block w-7/12">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2 fill-slate-300">
                <FaSearch/>
              </span>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Busque uma transação..." type="text" name="search" />
            </label>
          </div>
          <div className='bg-white rounded-xl w-10/12 p-5 text-xl overflow-y-auto'>
            <div className='flex justify-around font-bold'>
              <span>Dia da Semana</span>
              <span>Valor</span>
            </div>
            <TransactionHistory qtd={9} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions