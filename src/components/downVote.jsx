import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineThumbDown, HiThumbDown } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

function DownVote({ onDownVote, commentId, downVotesTotal, isVoteDown }){
  const { id: threadId } = useParams();
  return (
    <button
      type='button'
      onClick={() => onDownVote(commentId ? { threadId, commentId, isVoteDown } : { threadId, isVoteDown })}
      className={`flex gap-1 items-center cursor-pointer ${isVoteDown ? 'text-red-500' : 'text-gray-600'}`}
    >
      {isVoteDown ? <HiThumbDown/> : <HiOutlineThumbDown/>}
      <p className='text-sm'>{downVotesTotal}</p>
    </button>
  );
}

DownVote.propTypes = {
  commentId: PropTypes.string,
  onDownVote: PropTypes.func.isRequired,
  downVotesTotal: PropTypes.number.isRequired,
  isVoteDown: PropTypes.bool.isRequired,
};

export default DownVote;