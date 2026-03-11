import React from 'react';
import { HiAnnotation } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navbar() {
  const navigate = useNavigate();

  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  const onSignOut = async () => {
    await dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

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
          authUser !== null
            ? <p onClick={() => onSignOut()} className='hover:font-semibold cursor-pointer text-red-500'>Log Out</p>
            : <p onClick={() => navigate('/login')} className='font-semibold hover:text-black cursor-pointer text-primary border-2 border-primary px-5 py-1 rounded-xl'>Log In</p>
        }
      </div>
    </div>
  );
}

export default Navbar;