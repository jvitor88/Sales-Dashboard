import React from 'react'

const Transaction = ({ day, value }) => {
    return (
        <div className='bg-terciary text-primary flex items-center justify-around w-auto h-10 rounded-xl hover:scale-x-105' >
            <span>{day}</span>
            <span>R$ - {value}</span>
        </div>
    )
}

export default Transaction