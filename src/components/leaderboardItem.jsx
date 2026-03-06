import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ leaderboards }) {
  return (
    <>
      {
        leaderboards.map((leaderboard, index) => (
          <div key={index} className='flex justify-between items-center w-full text-xl mt-4'>
            <div className='flex-none w-[64px]'>
              <p>{index+1}</p>
            </div>
            <div className='grow'>
              <p>{leaderboard.user.name}</p>
            </div>
            <div className='flex-none'>
              <p>{leaderboard.score}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

LeaderboardItem.propTypes = {
  leaderboards: PropTypes.object.isRequired
};

export default LeaderboardItem;