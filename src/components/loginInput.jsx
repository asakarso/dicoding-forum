import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function LoginInput({ onLogin }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
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
      <button onClick={() => onLogin({ email, password })} type='button' className='bg-primary p-2 text-white rounded'>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;