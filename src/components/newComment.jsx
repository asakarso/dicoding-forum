import React from 'react';
import DefaultAvatar from '../assets/default-avatar.jpg';
import { useNavigate } from 'react-router-dom';

function NewComment() {
  const navigate = useNavigate();
  const isLogin = false;
  const ownerName = 'Josh Doe';
  const ownerAvatar = null;

  if (isLogin) {
    return (
      <form className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
        <div className='flex gap-3 items-center'>
          <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
          <p className='font-semibold'>{ownerName}</p>
        </div>
        <h3>Beri komentar</h3>
        <div className='flex flex-col gap-1'>
          <textarea id='category' type="text" className='border-gray-400 p-2 border rounded'></textarea>
        </div>
        <button onClick={() => console.log('sent!')} type="submit" className='bg-primary p-2 text-white rounded'>Kirim</button>
      </form>
    );
  } else {
    return (
      <div className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
        <p><span onClick={() => navigate('/login')} className='text-primary font-semibold cursor-pointer'>Login</span> untuk memberi komentar</p>
      </div>
    );
  }
}

export default NewComment;