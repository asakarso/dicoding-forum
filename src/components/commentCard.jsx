import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import DefaultAvatar from '../assets/default-avatar.jpg';
import DownVote from './downVote';
import UpVote from './upVote';
import { useDispatch } from 'react-redux';
import { asyncDownVoteComment, asyncNeutralizeVoteComment, asyncUpVoteComment } from '../states/threadDetail/action';

function CommentCard({ commentId, authUser, content, ownerName, ownerAvatar, createdAt, votesUp, votesDown }) {
  const dispatch = useDispatch();

  const onDownVote = ({ threadId, commentId, isVoteDown }) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteDown) {
      dispatch(asyncNeutralizeVoteComment(threadId, commentId));
    } else {
      dispatch(asyncDownVoteComment(threadId, commentId));
    }
  };

  const onUpVote = ({ threadId, commentId, isVoteUp }) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteUp) {
      dispatch(asyncNeutralizeVoteComment(threadId, commentId));
    } else {
      dispatch(asyncUpVoteComment(threadId, commentId));
    }
  };

  return (
    <div className='p-10 border border-gray-400 rounded-lg flex flex-col gap-4 mt-6 '>
      <div className='flex gap-3 items-center'>
        <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
        <p className='font-semibold'>{ownerName}</p>
      </div>
      <p className='text-sm text-gray-500'>{`Komentar pada ${postedAt(createdAt)}`}</p>
      <p>{content}</p>
      <div className='flex gap-4'>
        <UpVote commentId={commentId} onUpVote={onUpVote} upVotesTotal={votesUp.length} isVoteUp={votesUp.includes(authUser.id)}/>
        <DownVote commentId={commentId} onDownVote={onDownVote} downVotesTotal={votesDown.length} isVoteDown={votesDown.includes(authUser.id)}/>
      </div>
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