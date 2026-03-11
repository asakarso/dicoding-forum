import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-full'>
        <form className='flex flex-col w-1/4 gap-6'>
          <h1 className='text-4xl font-bold text-center text-primary'>LOGIN</h1>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" value={email} onChange={onEmailChange} placeholder='Email' className='border-gray-400 p-2 border rounded'/>
          </div>
          <div className='full flex flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" value={password} onChange={onPasswordChange} placeholder='Password' className='border-gray-400 p-2 border rounded'/>
          </div>
          <button onClick={() => onLogin({ email, password })} type="button" className='bg-primary p-2 text-white rounded'>Login</button>
        </form>
        <p className='mt-4'>Belum punya akun? <span onClick={() => navigate('/register')} className='font-semibold cursor-pointer'>Buat Akun</span></p>
      </div>
    </div>
  );
}

export default LoginPage;