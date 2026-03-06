import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import ThreadCard from '../components/threadCard';
import { HiPencilAlt } from 'react-icons/hi';

function ThreadsPage() {
  const navigate = useNavigate();

  const threadExample = {
    'id': 'thread-1',
    'title': 'Thread PertamaThread PertamaThread PertamaThread PertamaThread PertamaThread PertamaThread PertamaThread PertamaThread PertamaThread Pertama',
    'body': 'Ini adalah thread pertama Ini adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamadalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertamaIni adalah thread pertama',
    'category': 'General',
    'createdAt': '2021-06-21T07:00:00.000Z',
    'ownerId': 'users-1',
    'upVotesBy': [],
    'downVotesBy': [],
    'totalComments': 0
  };
  return (
    <>
      <Navbar/>
      <main className='px-16 py-10'>
        <h1 className='text-3xl font-semibold mb-8 text-primary'>Lihat Diskusi Terbaru</h1>
        <div className='flex flex-col gap-6'>
          <ThreadCard
            onClick={() => navigate(`/threads/${threadExample.id}`)}
            title={threadExample.title}
            category={threadExample.category}
            body={threadExample.body}
            ownerId={threadExample.ownerId}
            createdAt={threadExample.createdAt}
            totalVotesUp={threadExample.upVotesBy.length}
            totalVotesDown={threadExample.downVotesBy.length}
            totalComments={threadExample.totalComments}
          />
        </div>
        {/* Button Tambah Thread */}
        <div onClick={() => navigate('/threads/new-thread')} className='cursor-pointer p-4 w-fit rounded-full bg-primary text-white text-4xl fixed right-16 bottom-16'>
          <HiPencilAlt/>
        </div>
      </main>
    </>
  );
}

export default ThreadsPage;