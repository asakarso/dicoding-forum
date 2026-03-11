import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import VoteCommentIcon from './voteCommentIcon';
import DefaultAvatar from '../assets/default-avatar.jpg';

function CommentCard({ commentId, authUser, content, ownerName, ownerAvatar, createdAt, votesUp, votesDown }) {
  return (
    <div className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
      <div className='flex gap-3 items-center'>
        <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
        <p className='font-semibold'>{ownerName}</p>
      </div>
      <p className='text-sm text-gray-500'>{`Komentar pada ${postedAt(createdAt)}`}</p>
      <p>{content}</p>
      <VoteCommentIcon
        commentId={commentId}
        upVotesTotal={votesUp.length}
        downVotesTotal={votesDown.length}
        isVoteUp={votesUp.includes(authUser.id)}
        isVoteDown={votesDown.includes(authUser.id)}
        isComment={true}
      />
    </div>
  );
}

CommentCard.propTypes = {
  commentId: PropTypes.string.isRequired,
  authUser: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  votesUp: PropTypes.array.isRequired,
  votesDown: PropTypes.array.isRequired,
};

export default CommentCard;