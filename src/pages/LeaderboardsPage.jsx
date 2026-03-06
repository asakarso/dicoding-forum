import React from 'react';
import Navbar from '../components/navbar';
import LeaderboardItem from '../components/leaderboardItem';

function LeaderboardsPage() {
  const leaderboards = [
    {
      'user': {
        'id': 'users-1',
        'name': 'John Doe',
        'email': 'john@example.com',
        'avatar': 'https://generated-image-url.jpg'
      },
      'score': 10
    },
    {
      'user': {
        'id': 'users-2',
        'name': 'Jane Doe',
        'email': 'jane@example.com',
        'avatar': 'https://generated-image-url.jpg'
      },
      'score': 5
    }
  ];

  return (
    <>
      <Navbar/>
      <main className='px-16 py-10 w-screen'>
        <h1 className='text-3xl font-semibold mb-8 text-center text-primary'>Leaderboards</h1>
        <div className='p-8 rounded-xl border border-gray-400'>
          <div className='flex justify-between items-center w-full text-xl text-gray-600 font-semibold'>
            <div className='flex-none w-[64px]'>
              <h2>No.</h2>
            </div>
            <div className='grow'>
              <h2>Nama Pengguna</h2>
            </div>
            <div className='flex-none'>
              <h2>Skor</h2>
            </div>
          </div>
          <LeaderboardItem leaderboards={leaderboards}/>
        </div>
      </main>
    </>
  );
}

export default LeaderboardsPage;