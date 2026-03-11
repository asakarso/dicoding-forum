import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineThumbDown, HiOutlineThumbUp, HiThumbDown, HiThumbUp } from 'react-icons/hi';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, asyncToggleUpVoteThread } from '../states/threads/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncDownVoteComment, asyncDownVoteThreadDetail, asyncNeutralizeVoteComment, asyncNeutralizeVoteThreadDetail, asyncUpVoteComment, asyncUpVoteThreadDetail } from '../states/threadDetail/action';

function VoteCommentIcon({ threadId, commentId, upVotesTotal, downVotesTotal, commentsTotal=0, isVoteUp, isVoteDown, isComment, isDetail }) {
  const { id: threadIdParams } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((states) => states.authUser);

  const onUpVote = (id) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteUp) {
      if (isDetail) {
        dispatch(asyncNeutralizeVoteThreadDetail());
      } else if (isComment) {
        dispatch(asyncNeutralizeVoteComment(threadIdParams, commentId));
      } else {
        dispatch(asyncToggleNeutralizeVoteThread(id));
      }
    } else {
      if (isDetail) {
        dispatch(asyncUpVoteThreadDetail());
      } else if (isComment) {
        dispatch(asyncUpVoteComment(threadIdParams, commentId));
      } else {
        dispatch(asyncToggleUpVoteThread(id));
      }
    }
  };

  const onDownVote = (id) => {
    if (!authUser) {
      alert('Anda harus Login terlebih dahulu!');
      return;
    }

    if (isVoteDown) {
      if (isDetail) {
        dispatch(asyncNeutralizeVoteThreadDetail(id));
      } else if (isComment) {
        dispatch(asyncNeutralizeVoteComment(threadIdParams, commentId));
      } else {
        dispatch(asyncToggleNeutralizeVoteThread(id));
      }
    } else {
      if (isDetail) {
        dispatch(asyncDownVoteThreadDetail(id));
      } else if (isComment) {
        dispatch(asyncDownVoteComment(threadIdParams, commentId));
      } else {
        dispatch(asyncToggleDownVoteThread(id));
      }
    }
  };

  return (
    <div className='flex gap-4'>
      <div
        onClick={() => onUpVote(threadId || commentId)}
        className={`flex gap-1 items-center cursor-pointer ${isVoteUp ? 'text-blue-500' : 'text-gray-600'}`}
      >
        {isVoteUp ? <HiThumbUp/> : <HiOutlineThumbUp/> }
        <p className='text-sm'>{upVotesTotal}</p>
      </div>
      <div
        onClick={() => onDownVote(threadId || commentId)}
        className={`flex gap-1 items-center cursor-pointer ${isVoteDown ? 'text-red-500' : 'text-gray-600'}`}
      >
        {isVoteDown ? <HiThumbDown/> : <HiOutlineThumbDown/>}
        <p className='text-sm'>{downVotesTotal}</p>
      </div>
      {
        !isComment &&
        <div onClick={() => navigate(`/threads/${threadId}`)} className={`flex gap-1 items-center ${isDetail ? '' : 'cursor-pointer'}`}>
          <HiChatBubbleOvalLeft/>
          <p className='text-sm'>{commentsTotal}</p>
        </div>
      }
    </div>
  );
}

VoteCommentIcon.propTypes = {
  threadId: PropTypes.string,
  commentId: PropTypes.string,
  upVotesTotal: PropTypes.number.isRequired,
  downVotesTotal: PropTypes.number.isRequired,
  commentsTotal: PropTypes.number,
  isVoteUp: PropTypes.bool.isRequired,
  isVoteDown: PropTypes.bool.isRequired,
  isComment: PropTypes.bool,
  isDetail: PropTypes.bool,
};

export default VoteCommentIcon;