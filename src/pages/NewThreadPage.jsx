import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function NewThreadPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <form className='px-16 py-10 w-screen flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold text-center text-primary'>Buat Thread Baru</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Judul</label>
          <input id='title' type="text" className='border-gray-400 p-2 border rounded'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="category">Kategori</label>
          <input id='category' type="text" className='border-gray-400 p-2 border rounded'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="desc">Deskripsi</label>
          <textarea id='desc' type="text" className='border-gray-400 p-2 border rounded'></textarea>
        </div>
        <button onClick={() => navigate('/')} type="submit" className='bg-primary p-2 text-white rounded'>Buat</button>
      </form>
    </>
  );
}

export default NewThreadPage;