import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-full gap-6'>
        <h1 className='text-4xl font-bold text-center text-primary'>404 NOT FOUND</h1>
        <p>Halaman ini tidak tersedia!</p>
        <button type="button" onClick={() => navigate('/')} className='bg-primary p-2 text-white rounded'>Kembali ke Home</button>
      </div>
    </div>
  );
}

export default NotFoundPage;