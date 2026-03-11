import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import LeaderboardItem from '../components/leaderboardItem';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const leaderboards = useSelector((states) => states.leaderboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

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
              <h2>Pengguna</h2>
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