import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/loginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-full'>
        <LoginInput onLogin={onLogin}/>
        <p className='mt-4'>Belum punya akun? <span onClick={() => navigate('/register')} className='font-semibold cursor-pointer'>Buat Akun</span></p>
      </div>
    </div>
  );
}

export default LoginPage;