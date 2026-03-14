import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

function UpVote({ onUpVote, commentId, upVotesTotal, isVoteUp }){
  const { id: threadId } = useParams();
  return (
    <button
      type='button'
      onClick={() => onUpVote(commentId ? { threadId, commentId, isVoteUp } : { threadId, isVoteUp })}
      className={`flex gap-1 items-center cursor-pointer ${isVoteUp ? 'text-blue-500' : 'text-gray-600'}`}
    >
      {isVoteUp ? <HiThumbUp/> : <HiOutlineThumbUp/>}
      <p className='text-sm'>{upVotesTotal}</p>
    </button>
  );
}

UpVote.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  commentId: PropTypes.string,
  upVotesTotal: PropTypes.number.isRequired,
  isVoteUp: PropTypes.bool.isRequired,
};

export default UpVote;