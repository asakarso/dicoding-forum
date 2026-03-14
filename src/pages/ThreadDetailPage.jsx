import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import ThreadCard from '../components/threadCard';
import CommentCard from '../components/commentCard';
import NewComment from '../components/newComment';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action';

function ThreadDetailPage() {
  const { id: threadId } = useParams();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.authUser);
  const detailThread = useSelector((state) => state.detailThread);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [dispatch, threadId]);

  if (!detailThread) {
    return null;
  }

  const onAddComment = async (content) => {
    await dispatch(asyncAddComment({ threadId, content }));
    window.location.reload();
  };

  return (
    <>
      <Navbar/>
      <main className='px-16 py-10'>
        <div className='p-10 border border-gray-400 rounded-lg flex gap-4 w-full'>
          <HiChevronLeft onClick={() => navigate(-1)} className='text-4xl flex-shrink-0 cursor-pointer'/>
          <ThreadCard
            authUser={authUser}
            threadId={threadId}
            title={detailThread.title}
            category={detailThread.category}
            body={detailThread.body}
            ownerName={detailThread.owner.name}
            ownerAvatar={detailThread.owner.avatar}
            createdAt={detailThread.createdAt}
            votesUp={detailThread.upVotesBy}
            votesDown={detailThread.downVotesBy}
            totalComments={detailThread.comments.length}
            isDetail={true}
          />
        </div>
        <div className='ml-20'>
          <NewComment authUser={authUser} onAddComment={onAddComment}/>
          {
            detailThread.comments.map((comment, index) => (
              <CommentCard
                key={index}
                commentId={comment.id}
                authUser={authUser}
                content={comment.content}
                ownerName={comment.owner.name}
                ownerAvatar={comment.owner.avatar}
                createdAt={comment.createdAt}
                votesUp={comment.upVotesBy}
                votesDown={comment.downVotesBy}
              />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default ThreadDetailPage;