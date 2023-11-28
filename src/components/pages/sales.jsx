import React from 'react'
import Card from '../Card'
import Userbar from '../Userbar'
import Navbar from '../navbar'
import BuyerHistory from '../BuyerHistory'

const Sales = () => {
  return (
    <div className="flex w-full bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12">
        <Userbar />
        <div className='flex flex-col items-center gap-8 mt-5'>
          <h1 className='text-3xl font-bold'>Vendas</h1>
          <div className='flex flex-col gap-10'>
            <div className='flex gap-8'>
              <Card title="Total em Caixa (mês)" value="156.394,80" arrowup={true} percent={12} />
              <Card title="Cancelamentos (mês)" value="11.788,70" arrowup={false} percent={22} />
              <Card title="Descontos (mês)" value="1.483,65" arrowup={true} percent={8} />
              <Card title="Reembolsos (mês)" value="934,10" arrowup={false} percent={38} />
            </div>
            <div className='bg-white flex flex-col rounded-xl p-6 h-5/6 overflow-y-auto'>
              <h2 className='pl-3 text-xl font-bold'>Histórico de Vendas</h2>
              <BuyerHistory qtd={1000} />
              <span className='self-center text-2xl'>...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales