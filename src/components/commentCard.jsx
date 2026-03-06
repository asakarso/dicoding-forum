import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import VoteCommentIcon from './voteCommentIcon';
import DefaultAvatar from '../assets/default-avatar.jpg';

function CommentCard({ content, ownerName, ownerAvatar, createdAt, totalVotesUp, totalVotesDown }) {
  return (
    <div className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
      <div className='flex gap-3 items-center'>
        <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
        <p className='font-semibold'>{ownerName}</p>
      </div>
      <p className='text-sm text-gray-500'>{`Komentar pada ${postedAt(createdAt)}`}</p>
      <p>{content}</p>
      <VoteCommentIcon upVotesTotal={totalVotesUp} downVotesTotal={totalVotesDown}/>
    </div>
  );
}

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  totalVotesUp: PropTypes.number.isRequired,
  totalVotesDown: PropTypes.number.isRequired,
};

export default CommentCard;