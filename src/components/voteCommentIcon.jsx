import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineThumbDown, HiOutlineThumbUp, HiThumbDown, HiThumbUp } from 'react-icons/hi';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';

function VoteCommentIcon({ upVotesTotal, downVotesTotal, commentsTotal=0, isVoteUp, isVoteDown, isComment, isDetail, onClickComment }) {
  const isLogin = false;
  const [upVotesTotalState, setUpVotesTotalState] = useState(upVotesTotal);
  const [downVotesTotalState, setDownVotesTotalState] = useState(downVotesTotal);
  const [isVoteUpState, setIsVoteUpState] = useState(isVoteUp || false);
  const [isVoteDownState, setIsVoteDownState] = useState(isVoteDown || false);

  return (
    <div className='flex gap-4'>
      <div
        onClick={(ev) => {
          ev.preventDefault();
          if (isLogin) {
            if (isVoteUpState) {
              setIsVoteUpState(false);
              setUpVotesTotalState((prev) => prev - 1);
            } else {
              setIsVoteUpState(true);
              setUpVotesTotalState((prev) => prev + 1);
            }
          } else {
            alert('Anda harus Login terlebih dahulu!');
          }
        }}
        className={`flex gap-1 items-center cursor-pointer ${isVoteUpState ? 'text-blue-500' : 'text-gray-600'}`}
      >
        {isVoteUpState ? <HiThumbUp/> : <HiOutlineThumbUp/> }
        <p className='text-sm'>{upVotesTotalState}</p>
      </div>
      <div
        onClick={(ev) => {
          ev.preventDefault();
          if (isLogin) {
            if (isVoteDownState) {
              setIsVoteDownState(false);
              setDownVotesTotalState((prev) => prev - 1);
            } else {
              setIsVoteDownState(true);
              setDownVotesTotalState((prev) => prev + 1);
            }
          } else {
            alert('Anda harus Login terlebih dahulu!');
          }
        }}
        className={`flex gap-1 items-center cursor-pointer ${isVoteDownState ? 'text-red-500' : 'text-gray-600'}`}
      >
        {isVoteDownState ? <HiThumbDown/> : <HiOutlineThumbDown/>}
        <p className='text-sm'>{downVotesTotalState}</p>
      </div>
      {
        isComment &&
        <div onClick={onClickComment} className={`flex gap-1 items-center ${isDetail ? '' : 'cursor-pointer'}`}>
          <HiChatBubbleOvalLeft/>
          <p className='text-sm'>{commentsTotal}</p>
        </div>
      }
    </div>
  );
}

VoteCommentIcon.propTypes = {
  upVotesTotal: PropTypes.number.isRequired,
  downVotesTotal: PropTypes.number.isRequired,
  commentsTotal: PropTypes.number,
  isVoteUp: PropTypes.bool,
  isVoteDown: PropTypes.bool,
  isComment: PropTypes.bool,
  isDetail: PropTypes.bool,
  onClickComment: PropTypes.func,
};

export default VoteCommentIcon;