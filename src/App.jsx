import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import NewThreadPage from './pages/NewThreadPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import LoadingBar from '@dimasmds/react-redux-loading-bar';

function App() {
  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <LoadingBar progressIncrease={1} showFastActions updateTime={100}/>
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <LoadingBar progressIncrease={1} showFastActions updateTime={100}/>
      <main>
        <Routes>
          <Route path='/' element={<ThreadsPage/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
          <Route path='/threads/:id' element={<ThreadDetailPage/>}/>
          <Route path='/leaderboards' element={<LeaderboardsPage/>}/>
          <Route path='threads/new-thread' element={<NewThreadPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;