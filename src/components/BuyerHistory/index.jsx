import React from 'react';
import buyhistory from '../../data/buyhistory.json'

const BuyerHistory = ({ qtd }) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td className='font-bold italic px-10 py-4'>ID</td>
                        <td className='font-bold italic px-10 py-4'>Data</td>
                        <td className='font-bold italic px-10 py-4'>Nome</td>
                        <td className='font-bold italic px-10 py-4'>Localização</td>
                        <td className='font-bold italic px-10 py-4'>Valor</td>
                        <td className='font-bold italic px-10 py-4'>Situação</td>
                    </tr>
                </thead>
                <tbody className='text-gray-700'>
                    {buyhistory.filter(buy => buy.id <= qtd).map(buy => (
                        <tr key={buy.id} className='hover:bg-gray-200'>
                            <td className='px-8'>#{buy.buyid}</td>
                            <td className='px-8'>{buy.data}</td>
                            <td className='px-8'>{buy.nome}</td>
                            <td className='px-8'>{buy.localizacao}</td>
                            <td className='px-8'>R$ {buy.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            {buy.situacao === "Aprovado" && (
                                <td className='px-10 flex items-center gap-1'>
                                    <div className='w-2 h-2 rounded-full bg-green-500'></div>
                                    {buy.situacao}
                                </td>
                            )}
                            {buy.situacao === "Em análise" && (
                                <td className='px-10 flex items-center gap-1'>
                                    <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
                                    {buy.situacao}
                                </td>
                            )}
                            {buy.situacao === "Cancelado" && (
                                <td className='px-10 flex items-center gap-1'>
                                    <div className='w-2 h-2 rounded-full bg-red-500'></div>
                                    {buy.situacao}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BuyerHistory