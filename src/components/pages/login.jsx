import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import logo from '../../../public/main-logo.png'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        navigate('/dashboard')
    }

    return (
        <div className='flex flex-col items-center justify-center gap-8 h-screen w-screen bg-mainbg'>
            <form className='flex flex-col justify-center items-center gap-8 bg-white w-3/12 p-6 rounded-2xl' onSubmit={handleLogin}>
                <img src={logo} alt="Logo da Empresa" className='w-2/6' />
                <div className='flex flex-col gap-4 w-full'>
                    <Label htmlFor="email1" value="E-mail" className='text-base font ml-3'/>
                    <TextInput id="email1" type="email" placeholder="user@business.com" defaultValue='usuario@business.com' required />
                    <Label htmlFor="password1" value="Senha" className='text-base font ml-3'/>
                    <TextInput id="password1" type="password" defaultValue='mecontrata' required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" defaultChecked/>
                    <Label htmlFor="remember">Manter-me logado</Label>
                </div>
                <Button type="submit" className='mt-5 p-1 w-36 h-10 bg-primary text-white font-bold rounded-xl'>Acessar</Button>
            </form>
        </div>
    )
}

export default Login