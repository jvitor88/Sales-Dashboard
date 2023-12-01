import React from 'react'
import Graphic from '../Graphic'
import TransactionHistory from '../TransactionHistory'
import Card from '../Card'
import BuyerHistory from '../BuyerHistory'
import Userbar from '../Userbar'
import Navbar from '../navbar'

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen bg-mainbg">
      <Navbar />
      <div className="flex flex-col font-main w-10/12">
        <Userbar />
        <div className='flex flex-col items-center justify-center gap-8 mt-12'>
          <section className='flex gap-6'>
            <div className='bg-white rounded-xl'>
              <h2 className='pl-3 pt-3 text-xl font-bold'>Grafico de Receitas</h2>
              <Graphic />
            </div>
            <div className='bg-white rounded-xl w-[480px]'>
              <h2 className='pl-3 pt-3 text-xl font-bold'>Histórico de Transações</h2>
              <TransactionHistory qtd={4} />
            </div>
          </section>
          <section className='flex gap-8'>
            <Card title="Total de vendas (hoje)" value="3.265,21" arrowup={true} percent={11} />
            <Card title="Total líquido (hoje)" value="2.825,58" arrowup={true} percent={15} />
            <Card title="Cancelamentos (hoje)" value="130,00" arrowup={false} percent={80} />
            <Card title="Reembolsos (hoje)" value="344,20" arrowup={false} percent={78} />
          </section>
          <section>
            <div className='bg-white rounded-xl p-6'>
              <h2 className='pl-3 text-xl font-bold'>Histórico de Vendas</h2>
              <BuyerHistory qtd={3} />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard