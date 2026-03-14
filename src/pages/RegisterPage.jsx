import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/registerInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-full text-primary'>
        <RegisterInput onRegister={onRegister}/>
        <p className='mt-4'>Sudah punya akun? <span onClick={() => navigate('/login')} className='font-semibold cursor-pointer'>Masuk</span></p>
      </div>
    </div>
  );
}

export default RegisterPage;