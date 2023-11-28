import React from 'react'

const Graphic = () => {
  return (
    <div className='flex gap-2 items-end p-3 text-gray-700'>
        <ul className='flex flex-col gap-4 p-5'>
            <li>2000</li>
            <li>1000</li>
            <li>500</li>
            <li>250</li>
            <li>0</li>
        </ul>
        <div className='flex items-end gap-6 pr-2'>
            <div>
                <div className='bg-terciary w-8 h-12 rounded hover:bg-secondary'></div>
                <span>Fev</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-24 rounded hover:bg-secondary'></div>
                <span>Mar</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-36 rounded hover:bg-secondary'></div>
                <span>Abr</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-28 rounded hover:bg-secondary'></div>
                <span>Mai</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-40 rounded hover:bg-secondary'></div>
                <span>Jun</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-44 rounded hover:bg-secondary'></div>
                <span>Jul</span>
            </div>
            <div>
                <div className='bg-terciary w-8 h-20 rounded hover:bg-secondary'></div>
                <span>Ago</span>
            </div>
        </div>

    </div>
  )
}

export default Graphic