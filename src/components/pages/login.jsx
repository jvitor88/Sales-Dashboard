import { Link } from 'react-router-dom'
import logo from '../../../public/main-logo.png'

const Login = () => {

    return (
        <div className='flex flex-col items-center justify-center gap-8 h-screen w-screen bg-mainbg'>
            <div className='flex flex-col justify-center items-center gap-8 bg-white w-3/12 p-6 rounded-2xl'>
                <img src={logo} alt="Logo da Empresa" className='w-2/6' />
                <div className='flex flex-col w-full items-center gap-2'>
                    <span className='flex self-start font-bold pl-10'>Login</span>
                    <input className='w-10/12 p-2 self-center border-2 border-gray-700 rounded-xl' type="email" defaultValue='usuário@business.com' />
                    <span className='flex self-start font-bold pl-10'>Senha</span>
                    <input className='w-10/12 p-2 self-center border-2 border-gray-700 rounded-xl' type="password" defaultValue='mecontrata' />
                    <div className='flex items-center self-start gap-2 m-2'>
                        <input type="checkbox" id="logon" defaultChecked />
                        <label htmlFor="logon">Manter-me logado</label>
                    </div>
                    <Link to='/dashboard'><button className='mt-5 p-1 w-36 h-10 bg-primary text-white font-bold rounded-xl'>Logar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Login