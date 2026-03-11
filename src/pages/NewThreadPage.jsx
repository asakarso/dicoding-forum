import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/actions';
import useInput from '../hooks/useInput';

function NewThreadPage() {
  const dispatch = useDispatch();

  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <form className='px-16 py-10 w-screen flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold text-center text-primary'>Buat Thread Baru</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Judul</label>
          <input id='title' type="text" value={title} onChange={onTitleChange} placeholder='Masukkan judul' className='border-gray-400 p-2 border rounded'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="category">Kategori</label>
          <input id='category' type="text" value={category} onChange={onCategoryChange} placeholder='Masukkan kategori tread' className='border-gray-400 p-2 border rounded'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="desc">Deskripsi</label>
          <textarea id='desc' type="text" value={body} onChange={onBodyChange} placeholder='Deskripsi thread...' className='border-gray-400 p-2 border rounded'/>
        </div>
        <button onClick={() => onAddThread(title, body, category)} type="button" className='bg-primary p-2 text-white rounded'>Buat</button>
      </form>
    </>
  );
}

export default NewThreadPage;