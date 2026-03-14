import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import DefaultAvatar from '../assets/default-avatar.jpg';
import { useNavigate } from 'react-router-dom';
import DownVote from './downVote';
import { asyncDownVoteThreadDetail, asyncNeutralizeVoteThreadDetail, asyncUpVoteThreadDetail } from '../states/threadDetail/action';
import { useDispatch } from 'react-redux';
import { asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, asyncToggleUpVoteThread } from '../states/threads/actions';
import UpVote from './upVote';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';

function ThreadCard({ authUser, threadId, title, category, body, createdAt, votesUp, votesDown, totalComments, isDetail, ownerName, ownerAvatar }) {
  const dispatch = useDispatch();

  const onDownVote = ({ threadId, isVoteDown }) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteDown) {
      if (isDetail) {
        dispatch(asyncNeutralizeVoteThreadDetail(threadId));
      } else {
        dispatch(asyncToggleNeutralizeVoteThread(threadId));
      }
    } else {
      if (isDetail) {
        dispatch(asyncDownVoteThreadDetail(threadId));
      } else {
        dispatch(asyncToggleDownVoteThread(threadId));
      }
    }
  };

  const onUpVote = ({ threadId, isVoteUp }) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteUp) {
      if (isDetail) {
        dispatch(asyncNeutralizeVoteThreadDetail());
      } else {
        dispatch(asyncToggleNeutralizeVoteThread(threadId));
      }
    } else {
      if (isDetail) {
        dispatch(asyncUpVoteThreadDetail());
      } else {
        dispatch(asyncToggleUpVoteThread(threadId));
      }
    }
  };

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
      <div className='flex gap-4'>
        <UpVote onUpVote={onUpVote} upVotesTotal={votesUp.length} isVoteUp={votesUp.includes(authUser.id)}/>
        <DownVote onDownVote={onDownVote} downVotesTotal={votesDown.length} isVoteDown={votesDown.includes(authUser.id)}/>
        <div onClick={() => navigate(`/threads/${threadId}`)} className={`flex gap-1 items-center ${isDetail ? '' : 'cursor-pointer'}`}>
          <HiChatBubbleOvalLeft/>
          <p className='text-sm'>{totalComments}</p>
        </div>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  /** The user who logged in */
  authUser: PropTypes.object.isRequired,

  /** The id of the thread used when the component was on the Home page */
  threadId: PropTypes.string.isRequired,

  /** The title of the hread */
  title: PropTypes.string.isRequired,

  /** The category of the thread */
  category: PropTypes.string.isRequired,

  /** The description or content of the thread */
  body: PropTypes.string.isRequired,

  /** Created time of the thread */
  createdAt: PropTypes.string.isRequired,

  /** The list of user ids who voted up the thread */
  votesUp: PropTypes.array.isRequired,

  /** The list of user ids who voted down the thread */
  votesDown: PropTypes.array.isRequired,

  /** The amount of comments of the thread */
  totalComments: PropTypes.number.isRequired,

  /** The condition if the thread was in Home pgae or Detail page */
  isDetail: PropTypes.bool,

  /** The name of the author */
  ownerName: PropTypes.string,

  /** The avatar of the author */
  ownerAvatar: PropTypes.string,
};

export default ThreadCard;