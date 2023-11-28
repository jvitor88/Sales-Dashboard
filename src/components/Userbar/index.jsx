import React from 'react'

import image from '../../assets/user-photo.png'
import { FaBell } from "react-icons/fa";
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Userbar = () => {
  return (
    <div className=' flex justify-around mt-8 h-10'>
      <div>
        <h1 className='text-xl font-bold'>Olá, Usuário</h1>
        <p>Aqui estão as informações sobre suas vendas.</p>
      </div>
      <div className='flex gap-5 items-center cursor-pointer'>
        <FaBell/>
        <Dropdown label={<img className=' w-12 h-12 rounded-full' src={image} alt="Foto de perfil" />} arrowIcon={false} inline>
          <Dropdown.Header>
            <span className="block text-sm">Usuário</span>
            <span className="block truncate text-sm font-medium">usuário@business.com</span>
          </Dropdown.Header>
          <Link to='/ajustes'><Dropdown.Item>Ajustes</Dropdown.Item></Link>
          <Link to="/sair"><Dropdown.Item>Sair</Dropdown.Item></Link>
        </Dropdown>
      </div>
    </div>
  )
}

export default Userbar