import React from 'react';
import { HiAnnotation } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const isLogin = false;
  const navigate = useNavigate();
  return (
    <div className='px-8 py-6 shadow-md flex justify-between'>
      <div onClick={() => navigate('/')} className='text-2xl flex gap-2 items-center text-primary cursor-pointer'>
        <HiAnnotation/>
        <p className="font-semibold">
          Dicoding Forum
        </p>
      </div>
      <div className='flex gap-6 items-center'>
        <p onClick={() => navigate('/')} className='hover:font-semibold cursor-pointer'>Home</p>
        <p onClick={() => navigate('/leaderboards')} className='hover:font-semibold cursor-pointer'>Leaderboards</p>
        {
          isLogin
            ? <p onClick={() => navigate('/login')} className='hover:font-semibold cursor-pointer text-red-500'>Log Out</p>
            : <p onClick={() => navigate('/login')} className='font-semibold hover:text-black cursor-pointer text-primary border-2 border-primary px-5 py-1 rounded-xl'>Log In</p>
        }
      </div>
    </div>
  );
}

export default Navbar;