import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function RegisterInput({ onRegister }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='flex flex-col w-1/4 gap-6'>
      <h1 className='text-4xl font-bold text-center'>REGISTER</h1>
      <div className='flex flex-col gap-1'>
        <label htmlFor="nama">Nama</label>
        <input id='nama' type="text" value={name} onChange={onNameChange} placeholder='Nama' className='border-gray-400 p-2 border rounded'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email</label>
        <input id='email' type="email" value={email} onChange={onEmailChange} placeholder='Email' className='border-gray-400 p-2 border rounded'/>
      </div>
      <div className='full flex flex-col gap-1'>
        <label htmlFor="password">Password</label>
        <input id='password' type="password" value={password} onChange={onPasswordChange} placeholder='Password' className='border-gray-400 p-2 border rounded'/>
      </div>
      <button  onClick={() => onRegister({ name, email, password })} type="button" className='bg-primary p-2 text-white rounded'>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;