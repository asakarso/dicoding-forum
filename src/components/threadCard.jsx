import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import VoteCommentIcon from './voteCommentIcon';
import DefaultAvatar from '../assets/default-avatar.jpg';

function ThreadCard({ title, category, body, ownerId, createdAt, totalVotesUp, totalVotesDown, totalComments, onClick, isDetail, ownerName, ownerAvatar }) {
  return (
    <div className={`border border-gray-400 rounded-lg flex flex-col ${isDetail ? 'gap-6 border-0' : 'gap-3 p-6'}`}>
      <div onClick={isDetail ? null : onClick} className={`flex items-start gap-2 ${isDetail ? '' : 'cursor-pointer'}`}>
        {
          isDetail
            ? <h1 className='text-3xl font-semibold text-primary'>{title}</h1>
            : <h2 className='text-xl font-semibold line-clamp-1'>{title}</h2>
        }
        <p className='text-sm border border-primary px-2 rounded-full'>{category}</p>
      </div>
      <p className={isDetail ? '' : 'line-clamp-2'}>{body}</p>
      <div className='text-sm text-gray-500 flex gap-2'>
        <p>Dibuat oleh</p>
        {
          isDetail &&
          <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
        }
        <p>{`${isDetail ? ownerName : ownerId} (${postedAt(createdAt)})`}</p>
      </div>
      <VoteCommentIcon
        upVotesTotal={totalVotesUp}
        downVotesTotal={totalVotesDown}
        commentsTotal={totalComments}
        isComment={true}
        isDetail={isDetail}
        onClickComment={onClick}
      />
    </div>
  );
}

ThreadCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  totalVotesUp: PropTypes.number.isRequired,
  totalVotesDown: PropTypes.number.isRequired,
  totalComments: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isDetail: PropTypes.bool,
  ownerName: PropTypes.string,
  ownerAvatar: PropTypes.string,
};

export default ThreadCard;