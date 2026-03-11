import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import VoteCommentIcon from './voteCommentIcon';
import DefaultAvatar from '../assets/default-avatar.jpg';
import { useNavigate } from 'react-router-dom';

function ThreadCard({ authUser, threadId, title, category, body, createdAt, votesUp, votesDown, totalComments, isDetail, ownerName, ownerAvatar }) {
  const navigate = useNavigate();
  return (
    <div className={`border border-gray-400 rounded-lg flex flex-col ${isDetail ? 'gap-6 border-0' : 'gap-3 p-6'}`}>
      <div onClick={isDetail ? null : () => navigate(`/threads/${threadId}`)} className={`flex items-start gap-2 ${isDetail ? '' : 'cursor-pointer'}`}>
        {
          isDetail
            ? <h1 className='text-3xl font-semibold text-primary'>{title}</h1>
            : <h2 className='text-xl font-semibold line-clamp-1'>{title}</h2>
        }
        <p className='text-sm border border-primary px-2 rounded-full'>{category}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }}  className={isDetail ? '' : 'line-clamp-2'}/>
      <div className='text-sm text-gray-500 flex gap-1'>
        <p>Dibuat oleh</p>
        {
          isDetail &&
          <img src={ownerAvatar || DefaultAvatar} alt='avatar user' className='w-5 rounded-full'/>
        }
        <p>{`${ownerName} (${postedAt(createdAt)})`}</p>
      </div>
      <VoteCommentIcon
        threadId={threadId}
        upVotesTotal={votesUp.length}
        downVotesTotal={votesDown.length}
        commentsTotal={totalComments}
        isDetail={isDetail}
        isVoteUp={votesUp.includes(authUser.id)}
        isVoteDown={votesDown.includes(authUser.id)}
        isComment={false}
      />
    </div>
  );
}

ThreadCard.propTypes = {
  authUser: PropTypes.object.isRequired,
  threadId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  votesUp: PropTypes.array.isRequired,
  votesDown: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
  isDetail: PropTypes.bool,
  ownerName: PropTypes.string,
  ownerAvatar: PropTypes.string,
};

export default ThreadCard;