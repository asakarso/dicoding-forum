import React from 'react';
import DefaultAvatar from '../assets/default-avatar.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';

function NewComment({ authUser }) {
  const { id: threadId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [content, onContentChange] = useInput('');

  const onAddComment = async (content) => {
    await dispatch(asyncAddComment({ threadId, content }));
    window.location.reload();
  };

  if (authUser!==null) {
    return (
      <form className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
        <div className='flex gap-3 items-center'>
          <img src={authUser.avatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
          <p className='font-semibold'>{authUser.name}</p>
        </div>
        <h3>Beri komentar</h3>
        <div className='flex flex-col gap-1'>
          <textarea id='content' type="text" value={content} onChange={onContentChange} placeholder='Komentar Anda...' className='border-gray-400 p-2 border rounded h-20'/>
        </div>
        <button onClick={() => onAddComment(content)} type="button" className='bg-primary p-2 text-white rounded'>Kirim</button>
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

NewComment.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default NewComment;