import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import ThreadCard from '../components/threadCard';
import CommentCard from '../components/commentCard';
import NewComment from '../components/newComment';

function ThreadDetailPage() {
  const id = useParams();
  const navigate = useNavigate();

  const detailThread = {
    'id': 'thread-1',
    'title': 'Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama Thread Pertama',
    'body': 'Ini adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertama',
    'category': 'General',
    'createdAt': '2021-06-21T07:00:00.000Z',
    'owner': {
      'id': 'users-1',
      'name': 'John Doe',
      'avatar': 'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random'
    },
    'upVotesBy': [],
    'downVotesBy': [],
    'comments': [
      {
        'id': 'comment-1',
        'content': 'Ini adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertamaIni adalah komentar pertama',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'owner': {
          'id': 'users-1',
          'name': 'John Doe',
          'avatar': 'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random'
        },
        'upVotesBy': [],
        'downVotesBy': []
      }
    ]
  };

  if (id===detailThread.id) {
    console.log('tes');
  }

  return (
    <>
      <Navbar/>
      <main className='px-16 py-10'>
        <div className='p-10 border border-gray-400 rounded-lg flex gap-4 w-full'>
          <HiChevronLeft onClick={() => navigate(-1)} className='text-4xl flex-shrink-0 cursor-pointer'/>
          <ThreadCard
            title={detailThread.title}
            category={detailThread.category}
            body={detailThread.body}
            ownerName={detailThread.owner.name}
            ownerAvatar={detailThread.owner.avatar}
            createdAt={detailThread.createdAt}
            totalVotesUp={detailThread.upVotesBy.length}
            totalVotesDown={detailThread.downVotesBy.length}
            totalComments={detailThread.comments.length}
            isDetail={true}
          />
        </div>
        <div className='ml-20'>
          <NewComment/>
          {
            detailThread.comments.map((comment, index) => (
              <CommentCard
                key={index}
                content={comment.content}
                ownerName={comment.owner.name}
                ownerAvatar={comment.owner.avatar}
                createdAt={comment.createdAt}
                totalVotesUp={comment.upVotesBy.length}
                totalVotesDown={comment.downVotesBy.length}
              />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default ThreadDetailPage;